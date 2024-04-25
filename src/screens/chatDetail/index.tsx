import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { AppStackScreenProps } from "../../navigation/AppStackNavigator";
import MessageComponent from "../../components/MessageComponent";
import { AnimatedButton, Header } from "../../components";
import socket from "../../utils/socket";

export const ChatDetailScreen = ({ route, navigation }: AppStackScreenProps<'AuthScreen'>) => {
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const { name, id } = route.params;
    const flatListRef = useRef<FlatList<any>>();

    // however you detect new items
    flatListRef?.current?.scrollToEnd();
    const getUsername = async () => {
        try {
            const value = await AsyncStorage.getItem("username");
            if (value !== null) {
                setUser(value);
            }
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({ title: name });
        getUsername()
        socket.emit("findRoom", id);
        socket.on("foundRoom", (roomChats: React.SetStateAction<never[]>) => setChatMessages(roomChats));
    }, []);


    useEffect(() => {
        socket.on("foundRoom", (roomChats: React.SetStateAction<never[]>) => setChatMessages(roomChats));
    }, [socket]);

    const handleNewMessage = () => {
        if (message) {


            const hour =
                new Date().getHours() < 10
                    ? `0${new Date().getHours()}`
                    : `${new Date().getHours()}`;

            const mins =
                new Date().getMinutes() < 10
                    ? `0${new Date().getMinutes()}`
                    : `${new Date().getMinutes()}`;

            if (user) {
                socket.emit("newMessage", {
                    message,
                    room_id: id,
                    user,
                    timestamp: { hour, mins },
                });
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={name} />
            <View style={styles.messagingScreen}>
                <View
                    style={[
                        styles.messagingScreen,
                        { paddingVertical: 15, paddingHorizontal: 10 },
                    ]}
                >
                    {chatMessages[0] ? (
                        <FlatList
                            ref={flatListRef}
                            data={chatMessages}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <MessageComponent
                                    item={item}
                                    user={user} />
                            )}
                        />
                    ) : (
                        ""
                    )}
                </View>

                <View style={styles.messagingInputContainer}>
                    <TextInput
                        placeholder="Type Message"
                        style={styles.messagingInput}
                        onChangeText={(value) => setMessage(value)}
                    />

                    <AnimatedButton
                        title="Send"
                        bg={message != '' ? 'green.800' : 'gray.300'}
                        onPress={handleNewMessage}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

