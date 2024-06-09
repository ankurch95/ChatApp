import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    messagingScreen: {
        flex: 1,
        backgroundColor: '#F7F7F7'
    },
    messagingInputContainer: {
        width: "100%",
        minHeight: 100,
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        flexDirection: "row",
    },
    messagingInput: {
        borderWidth: 0,
        padding: 15,
        width: '70%',
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#F7F7F7'
    },
    messagingButtonContainer: {
        width: "30%",
        backgroundColor: "green",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
    }

});