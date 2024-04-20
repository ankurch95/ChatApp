import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { Typography } from '../../components'
import { VStack, Box, Divider, Card } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ProfileScreen = () => {
  const [username, setUsername] = useState<string | null>('')

  useEffect(() => {
    getUserDetail()
  }, [])

  const getUserDetail = async () => {
    let user: string | null = await AsyncStorage.getItem('username')
    setUsername(user)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Typography
            variant={"bigText"}>
            Profile
          </Typography>
        </View>
      </View>

      <ScrollView>
        <Box
          borderX="1"
          borderRadius="2xl"
          backgroundColor={'white'}
          margin={2}
          padding={3}>
          <Typography variant='body'>
            {username}
          </Typography>
          <Divider />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}