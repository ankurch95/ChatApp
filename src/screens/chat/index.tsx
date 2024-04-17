import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";
import ChatComponent from "../../components/ChatCard";
import { Typography } from "../../components";
import { chatData } from "../../utils";
import socket from "../../utils/socket";
import CreateGroupModal from "../../components/Modal";


export const ChatScreen = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [rooms, setRooms] = useState([]);

    useLayoutEffect(() => {
		fetchGroups();
	}, []);


    const fetchGroups=()=> {
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
                    <Typography
                        variant={"body"}
                        onPress={() => setVisible(true)}>
                        New Chat
                    </Typography>
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
                        <Text style={styles.chatEmptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
            {visible ? <CreateGroupModal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

