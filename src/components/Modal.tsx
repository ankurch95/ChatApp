import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AnimatedButton } from "./AnimatedButton";
import { Typography } from "./Typography";
import { Toast } from "./Toast";
import { useToast } from 'native-base';

const Modal = ({ setVisible }: any) => {
    const [groupName, setGroupName] = useState<string>("");
    const toast = useToast();
    const closeModal = () => setVisible(false);

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
        }
        closeModal();
    };
    return (
        <View style={styles.modalContainer}>
            <Typography
                variant="subtitle1">
                Enter your Group name
            </Typography>
            <TextInput
                style={styles.modalInput}
                placeholder='Group name'
                onChangeText={(value) => setGroupName(value)}
            />
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
    );
};

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        borderTopColor: "#ddd",
        borderTopWidth: 1,
        elevation: 1,
        height: 400,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        zIndex: 10,
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    modalInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginVertical: 15
    },
    modalSubHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },

    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        height: 60

    },
})