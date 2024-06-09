import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chatScreen: {
        backgroundColor: "#F7F7F7",
        flex: 1,
    },
    chatHeading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    chatTopContainer: {
        backgroundColor: "#F7F7F7",
        height: 70,
        width: "100%",
        padding: 20,
        justifyContent: "center",
        elevation: 2,
    },
    chatHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    chatListContainer: {
        flex:1,
    },
    chatEmptyContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    chatEmptyText: {
        fontWeight: "bold",
        fontSize: 24,
        paddingBottom: 30
    },
    bottomSheetContainer: {
        // flex: 1,
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
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
    messagingscreen: {
        flex: 1,
    },
    messaginginputContainer: {
        width: "100%",
        minHeight: 100,
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        flexDirection: "row",
    },
    messaginginput: {
        borderWidth: 1,
        padding: 15,
        flex: 1,
        marginRight: 10,
        borderRadius: 20,
    },
    messagingbuttonContainer: {
        width: "30%",
        backgroundColor: "green",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",

    },


    mmessageWrapper: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 15,
    },
    mmessage: {
        maxWidth: "50%",
        backgroundColor: "#f5ccc2",
        padding: 15,
        borderRadius: 10,
        marginBottom: 2,
    },
    mvatar: {
        marginRight: 5,
    },

    cavatar: {
        marginRight: 15,
    },



});