import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AnimatedButton } from '../../components'
import { AppStackScreenProps } from '../../navigation/AppStackNavigator'
import { useToast } from 'native-base'
import { Toast } from '../../components/Toast'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthScreen = ({navigation}: AppStackScreenProps<'AuthScreen'>) => {
  const toast = useToast();
  const [username, setUsername] = useState<string>('')

  const signInAction=()=>{
    if (username.trim()) {
      storeUserDetail()
    } else {
      toast.show({
        render: () => (
            <Toast
                bg={'red.500'}
                textColor="white"
                message={'Please enter username.'}
            />
        ),
        duration: 1000,
        placement: 'top',
    });
    }
  }

  const storeUserDetail=async()=>{
    try {
			await AsyncStorage.setItem("username", username);
			navigation.navigate("ChatScreen");
		} catch (e) {
      toast.show({
        render: () => (
            <Toast
                bg={'red.500'}
                textColor="white"
                message={'Error! While saving username.'}
            />
        ),
        duration: 1000,
        placement: 'top',
    });
		}
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,margin:20,justifyContent:'center'}}>
        <Text style={styles.loginHeading}>Chat App</Text>
        <View style={styles.loginInputContainer}>
          <TextInput
            autoCorrect={false}
            placeholder='Enter your username'
            style={styles.loginInput}
            onChangeText={(value: string) => setUsername(value)}
          />
        </View>

        <AnimatedButton
          title='Login'
          bg={'#000'}
          // onPress={()=>navigation.navigate('ChatScreen')}
          onPress={()=>signInAction()}
           />
      </View>
    </SafeAreaView>
  )
}