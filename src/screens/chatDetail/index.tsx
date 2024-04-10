import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { AppStackScreenProps } from "../../navigation/AppStackNavigator";
import MessageComponent from "../../components/MessageComponent";
import { AnimatedButton } from "../../components";

export const ChatDetailScreen = ({ route, navigation }: AppStackScreenProps<'AuthScreen'>) => {
    const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Tomer",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "David",
        },
    ]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");

    //👇🏻 Access the chatroom's name and id
    const { name, id } = route.params;

    //👇🏻 This function gets the username saved on AsyncStorage
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

    //👇🏻 Sets the header title to the name chatroom's name
    useLayoutEffect(() => {
        navigation.setOptions({ title: name });
        getUsername()
    }, []);

    /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
    const handleNewMessage = () => {
        const hour =
            new Date().getHours() < 10
                ? `0${new Date().getHours()}`
                : `${new Date().getHours()}`;

        const mins =
            new Date().getMinutes() < 10
                ? `0${new Date().getMinutes()}`
                : `${new Date().getMinutes()}`;

        console.log({
            message,
            user,
            timestamp: { hour, mins },
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.messagingScreen}>
                <View
                    style={[
                        styles.messagingScreen,
                        { paddingVertical: 15, paddingHorizontal: 10 },
                    ]}
                >
                    {chatMessages[0] ? (
                        <FlatList
                            data={chatMessages}
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
                        bg='green.800'
                        onPress={handleNewMessage}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

