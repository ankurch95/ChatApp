import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import ChatComponent from "../../components/ChatCard";
import { AnimatedButton, CustomIcon, Typography } from "../../components";
import socket from "../../utils/socket";
import CreateGroupModal from "../../components/Modal";


export const ChatScreen = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [rooms, setRooms] = useState([]);

    useLayoutEffect(() => {
        fetchGroups();
    }, []);


    const fetchGroups = () => {
        fetch("http://localhost:4000/api")
            .then((res) => res.json())
            .then((data) => setRooms(data))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        socket.on("roomsList", (rooms: React.SetStateAction<never[]>) => {
            setRooms(rooms);
        });
    }, [socket]);

    return (
        <SafeAreaView style={styles.chatScreen}>
            <View style={styles.chatTopContainer}>
                <View style={styles.chatHeader}>
                    <Typography
                        variant={"bigText"}>
                        Chats
                    </Typography>
                    <CustomIcon name="plus-circle" size={30} color={'blue.600'}/>
                </View>
            </View>

            <View style={styles.chatListContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatEmptyContainer}>
                        <Typography
                            variant="bigText">
                            No rooms created!
                        </Typography>
                        <Typography
                            variant="body">
                            Click the icon above to create a Chat room
                        </Typography>
                        <View style={{width:'100%',height:60,marginTop:20

                        }}>
                        <AnimatedButton
                            title='Create Room'
                            bg={'blue.600'}
                            onPress={() => setVisible(true)}
                        />
                        </View>
                    </View>
                )}
            </View>
            {visible ? <CreateGroupModal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

