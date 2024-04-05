import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AnimatedButton } from '../../components'

export const AuthScreen = () => {
  const [username, setUsername] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.loginheading}>Sign in</Text>
        <View style={styles.logininputContainer}>
          <TextInput
            autoCorrect={false}
            placeholder='Enter your username'
            style={styles.logininput}
            onChangeText={(value: string) => setUsername(value)}
          />
        </View>

        <AnimatedButton
          title='Login'
          
          bg={'#000'} />
      </View>
    </SafeAreaView>
  )
}