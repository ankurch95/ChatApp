import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    messagingScreen: {
        flex: 1,
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
        backgroundColor: '#CACACA'
    },
    messagingButtonContainer: {
        width: "30%",
        backgroundColor: "green",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
    }

});