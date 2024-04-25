import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import ChatComponent from "../../components/ChatCard";
import { AnimatedButton, CustomIcon, SingleBottomSheetModal, Typography } from "../../components";
import socket from "../../utils/socket";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { Input, Stack, useToast } from "native-base";
import { Toast } from "../../components/Toast";
import { useFocusEffect } from "@react-navigation/native";


export const ChatScreen = () => {
    const [rooms, setRooms] = useState([]);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const [groupName, setGroupName] = useState<string>("");
    const toast = useToast();
    const closeModal = () => bottomSheetModalRef.current?.close()

    const handleCreateRoom = () => {
        console.log({ groupName });
        if (groupName == '') {
            toast.show({
                render: () => (
                    <Toast
                        bg={'red.500'}
                        textColor="white"
                        message={'Please enter group name'}
                    />
                ),
                duration: 1000,
                placement: 'top',
            });
            return
        } else {
            socket.emit('createRoom', groupName)
        }
        closeModal();
    };

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = fetchGroups()
            return () => unsubscribe;
        }, [])
    );


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
                    <CustomIcon name="plus-circle" size={30} color={'blue.600'} onPress={handlePresentModalPress} />
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
                        <View style={{
                            width: '100%', height: 60, marginTop: 20

                        }}>
                            <AnimatedButton
                                title='Create Room'
                                bg={'blue.600'}
                                // onPress={() => setVisible(true)}
                                onPress={handlePresentModalPress}
                            />
                        </View>
                    </View>
                )}
            </View>

            <BottomSheetModalProvider>
                <View style={styles.bottomSheetContainer}>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        onDismiss={() => bottomSheetModalRef.current?.close()}
                        containerStyle={{ backgroundColor: '#00000050' }}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <View style={styles.modalContainer}>
                                <Typography
                                    variant="subtitle1">
                                    Enter your Group name
                                </Typography>

                                <Stack space={4} w="100%" mx="auto" marginY={4}>
                                    <Input
                                        variant="outline"
                                        size={'xl'}
                                        borderRadius={10}
                                        backgroundColor={'white'}
                                        placeholder="Group name"
                                        onChangeText={(value: string) => setGroupName(value)} />
                                </Stack>

                                <View style={styles.modalButtonContainer}>
                                    <View style={{ marginRight: 10, flex: 1 }}>
                                        <AnimatedButton
                                            title='Create'
                                            bg='green.900'
                                            onPress={handleCreateRoom} />
                                    </View>
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <AnimatedButton
                                            title='Cancel'
                                            bg='red.600'
                                            onPress={closeModal} />
                                    </View>
                                </View>
                            </View>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

