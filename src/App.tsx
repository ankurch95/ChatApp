import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from './navigation/AppStackNavigator';
import { NativeBaseProvider } from 'native-base';

const NativeBaseThemeProvider = ({ children }: Props) => {
  // const theme = useCustomTheme();
  return <NativeBaseProvider >{children}</NativeBaseProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseThemeProvider>
        <AppStackNavigator />
      </NativeBaseThemeProvider>
    </NavigationContainer>
  );
}