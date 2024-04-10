import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
    NativeStackScreenProps
} from '@react-navigation/native-stack';
import { AuthScreen, SplashScreen, ChatScreen, ChatDetailScreen } from '../screens';

export type AppStackParamList = {
    AuthScreen: undefined;
    SplashScreen: undefined,
    ChatScreen: undefined,
    ChatDetailScreen: {
        id: string,
        name: string,
    }
};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
    NativeStackNavigationProp<AppStackParamList, T>;
export type AppStackScreenProps<T extends keyof AppStackParamList> =
    NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            id="App"
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
        </Stack.Navigator>
    );
};