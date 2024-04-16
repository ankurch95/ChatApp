import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { AppStackScreenProps } from '../../navigation/AppStackNavigator'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const SplashScreen = ({
    navigation,
}: AppStackScreenProps<'SplashScreen'>) => {
    useLayoutEffect(() => {
        setTimeout(() => {
            getUsername();
        }, 2000);
    }, []);

    const getUsername = async () => {
        try {
            const value = await AsyncStorage.getItem("username");
            if (value !== null) {
                navigation.navigate("ChatScreen");
            } else {
                navigation.navigate("AuthScreen");
            }
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Splash Screen</Text>
            </View>
        </SafeAreaView>
    )
}