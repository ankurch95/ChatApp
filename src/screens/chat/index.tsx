import React from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
// import ChatComponent from "../component/ChatComponent";
import { styles } from "./styles";


export const ChatScreen = () => {

    //👇🏻 Dummy list of rooms
    const rooms = [
        {
            id: "1",
            name: "Novu Hangouts",
            messages: [
                {
                    id: "1a",
                    text: "Hello guys, welcome!",
                    time: "07:50",
                    user: "Tomer",
                },
                {
                    id: "1b",
                    text: "Hi Tomer, thank you! 😇",
                    time: "08:50",
                    user: "David",
                },
            ],
        },
        {
            id: "2",
            name: "Hacksquad Team 1",
            messages: [
                {
                    id: "2a",
                    text: "Guys, who's awake? 🙏🏽",
                    time: "12:50",
                    user: "Team Leader",
                },
                {
                    id: "2b",
                    text: "What's up? 🧑🏻‍💻",
                    time: "03:50",
                    user: "Victoria",
                },
            ],
        },
    ];

    return (
        <SafeAreaView style={styles.chatScreen}>
            <View style={styles.chatTopContainer}>
                <View style={styles.chatHeader}>
                    <Text style={styles.chatHeading}>Chats</Text>

                    {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
                    <Pressable onPress={() => console.log("Button Pressed!")}>
                        {/* <Feather name='edit' size={24} color='green' /> */}
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatListContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => {return (
                            <Pressable style={styles.cchat} >
                                <View style={styles.crightContainer}>
                                    <View>
                                        <Text style={styles.cusername}>{item.name}</Text>

                                        <Text style={styles.cmessage}>
                                            {item.messages[item.messages.length - 1]?.text ? item.messages[item.messages.length - 1].text : "Tap to start chatting"}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.ctime}>
                                            {item.messages[item.messages.length - 1]?.time ? item.messages[item.messages.length - 1].time : "now"}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>)}
                        }
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatEmptyContainer}>
                        <Text style={styles.chatEmptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

