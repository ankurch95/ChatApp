import { View, Pressable, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Typography } from "./Typography";
import { Box, Card } from "native-base";

const ChatComponent = ({ item }: any) => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState({});

    useFocusEffect(() => {
        setMessages(item.messages[item.messages.length - 1]);
    });

    const handleNavigation = () => {
        navigation.navigate("ChatDetailScreen", {
            id: item.id,
            name: item.name,
        });
    };

    return (
        <Box
            bg="white"
            shadow={2}
            rounded="lg"
            maxWidth="100%"
            margin={2}
            padding={3}>

            <Pressable onPress={handleNavigation}>
                <View style={styles.rightContainer}>
                    <View>
                        <Typography
                            variant="subtitle2">
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
        </Box>
    );
};

export default ChatComponent;

const styles = StyleSheet.create({
    chat: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        height: 80,
    },
    rightContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
})