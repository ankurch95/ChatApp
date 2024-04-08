import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AnimatedButton } from '../../components'
import { AppStackScreenProps } from '../../navigation/AppStackNavigator'

export const AuthScreen = ({navigation}: AppStackScreenProps<'AuthScreen'>) => {

  const [username, setUsername] = useState('')
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
          onPress={()=>navigation.navigate('ChatScreen')} />
      </View>
    </SafeAreaView>
  )
}