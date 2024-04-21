import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from './navigation/AppStackNavigator';
import { NativeBaseProvider } from 'native-base';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const NativeBaseThemeProvider = ({ children }: Props) => {
  // const theme = useCustomTheme();
  return <NativeBaseProvider >{children}</NativeBaseProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <AppStackNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NativeBaseThemeProvider>
    </NavigationContainer>
  );
}