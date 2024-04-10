import { View, Pressable, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Typography } from "./Typography";

const ChatComponent = ({ item }: any) => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState({});

    useLayoutEffect(() => {
        setMessages(item.messages[item.messages.length - 1]);
    }, []);

    const handleNavigation = () => {
        navigation.navigate("ChatDetailScreen", {
            id: item.id,
            name: item.name,
        });
    };

    return (
        <Pressable style={styles.chat} onPress={handleNavigation}>
            <View style={styles.rightContainer}>
                <View>
                    <Typography
                        variant="subtitle1">
                        {item.name}
                    </Typography>

                    <Typography
                        variant="body">
                        {messages?.text ? messages.text : "Tap to start chatting"}
                    </Typography>
                </View>
                <View>
                    <Typography
                        variant="description">
                        {messages?.time ? messages.time : "now"}
                    </Typography>
                </View>
            </View>
        </Pressable>
    );
};

export default ChatComponent;

const styles = StyleSheet.create({
    chat: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        height: 80,
        marginBottom: 10,
    },
    rightContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
})