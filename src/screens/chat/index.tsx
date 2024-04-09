import React, { useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";
import ChatComponent from "../../components/ChatCard";
import { Typography } from "../../components";
import { chatData } from "../../utils";
import Modal from "../../components/Modal";


export const ChatScreen = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.chatScreen}>
            <View style={styles.chatTopContainer}>
                <View style={styles.chatHeader}>
                    <Typography
                        variant={"subtitle1"}>
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
                {chatData.length > 0 ? (
                    <FlatList
                        data={chatData}
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
            {visible ? <Modal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

