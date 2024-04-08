import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loginHeading: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight:'bold'
    },
    loginInputContainer: {
        width: "100%",
        height: 60,
        marginTop:50
    },
    loginInput: {
        borderWidth: 1,
        flex: 1,
        padding: 8,
        borderRadius: 5,
        marginBottom: 20
    },
    loginbutton: {
        backgroundColor: "green",
        padding: 12,
        marginVertical: 10,
        width: "60%",
        borderRadius: 20,
        elevation: 1,
    },
    loginbuttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "600",
    },
})