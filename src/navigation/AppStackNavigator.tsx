import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
    NativeStackScreenProps
} from '@react-navigation/native-stack';
import { AuthScreen, SplashScreen, ChatScreen, ChatDetailScreen, ProfileScreen, UpdateScreen, EditProfileScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomIcon } from '../components';
import { ChatSettingScreen } from '../screens/profile/chatSetting';

export type AppStackParamList = {
    AuthScreen: undefined;
    SplashScreen: undefined,
    Home: undefined,
    ChatDetailScreen: {
        id: string,
        name: string,
    },
    EditProfileScreen:undefined,
    ChatSettingScreen:undefined
};

export type TabStackParamList = {
    ChatScreen: undefined,
    ProfileScreen: undefined,
    UpdateScreen: undefined
};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
    NativeStackNavigationProp<AppStackParamList, T>;
export type AppStackScreenProps<T extends keyof AppStackParamList> =
    NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName='ChatScreen'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2563eb',
                tabBarInactiveTintColor: 'gray'
            }}>
            {/* <Tab.Screen
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ focused }) => <CustomIcon name='update' size={6} color={focused ? 'blue.600' : 'gray.500'} />
                }}
                name="UpdateScreen"
                component={UpdateScreen} /> */}
            <Tab.Screen
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ focused }) => <CustomIcon name='chat' size={6} color={focused ? 'blue.600' : 'gray.500'} />
                }}
                name="ChatScreen"
                component={ChatScreen} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => <CustomIcon name='account' size={7} color={focused ? 'blue.600' : 'gray.500'} />
                }}
                name="ProfileScreen"
                component={ProfileScreen} />
        </Tab.Navigator>
    );
}


export const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            id="App"
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="ChatSettingScreen" component={ChatSettingScreen} />

        </Stack.Navigator>
    );
};