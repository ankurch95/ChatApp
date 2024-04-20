import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { Typography } from '../../components'

export const ProfileScreen = () => {
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
    </SafeAreaView>
  )
}