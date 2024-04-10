import { View, StyleSheet } from "react-native";
import React from "react";
import { Typography } from "./Typography";

export default function MessageComponent({ item, user }: any) {
    const status = item.user !== user;

    return (
        <View>
            <View
                style={
                    status
                        ? styles.messageWrapper
                        : [styles.messageWrapper, { alignItems: "flex-end" }]
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                    <View
                        style={
                            status
                                ? styles.message
                                : [styles.message, { backgroundColor: "rgb(194, 243, 194)" }]
                        }
                    >
                        <Typography
                            variant="body">
                            {item.text}
                        </Typography>
                        <Typography
                            style={styles.timeText }
                            variant="caption">
                            {item.time}
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    messageWrapper: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 15,
    },
    message: {
        maxWidth: "57%",
        backgroundColor: "#f5ccc2",
        paddingTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 2,
    },
    mvatar: {
        marginRight: 5,
    },

    cavatar: {
        marginRight: 15,
    },
    timeText: {
        textAlign: 'right',
        marginTop: 5,
        paddingBottom: 7
    }
})