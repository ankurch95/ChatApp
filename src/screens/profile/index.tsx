import { View, ScrollView, Share, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { CustomIcon, Typography } from '../../components'
import { Box, Divider } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState<string | null>('')
  const [about, setAbout] = useState<string>('')

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = getUserDetail()
      return () => unsubscribe;
    }, [])
  );


  const getUserDetail = async () => {
    let user: string | null = await AsyncStorage.getItem('username')
    let about: string | any = await AsyncStorage.getItem('about')
    setUsername(user)
    setAbout(about)
  }

  const shareApp = () => {
    Share.share({
      title: 'Some Title',
      message: 'URL',
      url: 'App URL'
    }, { dialogTitle: "Android Title" })
      .then(({ action, activityType }) => {
        if (action === Share.sharedAction)
          console.log('Share was successful');
        else
          console.log('Share was dismissed');
      })
      .catch(err => console.log(err))
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

          <View style={{ flexDirection: 'row' }}>
            <View style={{ height: 60, width: 60, borderRadius: 60 / 2, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
              {/* <Image
                source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
                style={{ height: 60, width: 60, borderRadius: 60 / 2 }}
              /> */}
              <CustomIcon
                name='camera-outline' color={'grey'} size={7} />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Typography
                variant='bigText'
                numberOfLines={2}>
                {username}
              </Typography>
              <Typography variant='info'>
                {about != null ? about : 'Add About'}
              </Typography>
            </View>
          </View>
          <Divider marginY={3} />
          <Pressable
            style={{ flexDirection: 'row' }}
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <CustomIcon
              name='pencil' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Edit Profile
              </Typography>
            </View>
          </Pressable>
        </Box>


        <Box
          borderX="1"
          borderRadius="2xl"
          backgroundColor={'white'}
          margin={2}
          padding={3}>
          <View style={{ flexDirection: 'row' }}>
            <CustomIcon
              name='key-variant' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Account
              </Typography>
            </View>
          </View>
          <Divider marginY={3} />
          <View style={{ flexDirection: 'row' }}>
            <CustomIcon
              name='lock-outline' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Privacy
              </Typography>
            </View>
          </View>
          <Divider marginY={3} />
          <View style={{ flexDirection: 'row' }}>
            <CustomIcon
              name='chat-outline' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Chat
              </Typography>
            </View>
          </View>
        </Box>


        <Box
          borderX="1"
          borderRadius="2xl"
          backgroundColor={'white'}
          margin={2}
          padding={3}>
          <View style={{ flexDirection: 'row' }}>
            <CustomIcon
              name='information-outline' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Help
              </Typography>
            </View>
          </View>
          <Divider marginY={3} />
          <Pressable
            style={{ flexDirection: 'row' }}
            onPress={shareApp}>
            <CustomIcon
              name='share-variant' color={'black'} size={5} />
            <View style={{ marginLeft: 15 }}>
              <Typography variant='info'>
                Share
              </Typography>
            </View>
          </Pressable>
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}