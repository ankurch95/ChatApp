import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { Header, Typography } from '../../../components'
import { Box, Input } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const EditProfileScreen = () => {
    const [username, setUsername] = useState<string>('')
    const [phoneNo, setPhoneNo] = useState<string>('')
    const [about, setAbout] = useState<string>('')


    useEffect(() => {
        getUserDetail()
    }, [])

    const getUserDetail = async () => {
        let username: string | any = await AsyncStorage.getItem('username')
        let phone: string | any = await AsyncStorage.getItem('phone')
        let about: string | any = await AsyncStorage.getItem('about')
        setUsername(username)
        setPhoneNo(phone)
        setAbout(about)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'Edit Profile'} />

            <ScrollView>
                <Typography
                    variant={'subtitle2'}
                    marginX={3}>
                    Name
                </Typography>
                <Box
                    borderX="1"
                    borderRadius="2xl"
                    backgroundColor={'white'}
                    margin={2}
                    padding={3}>
                    <Input
                        value={username}
                        color={'black'}
                        onChangeText={async (txt: string) => { setUsername(txt), await AsyncStorage.setItem('username', txt) }} />
                </Box>

                <Typography
                    variant={'subtitle2'}
                    marginX={3}>
                    Phone Number
                </Typography>
                <Box
                    borderX="1"
                    borderRadius="2xl"
                    backgroundColor={'white'}
                    margin={2}
                    padding={3}>
                    <Input
                        value={phoneNo}
                        color={'black'}
                        onChangeText={async (txt: string) => { setPhoneNo(txt), await AsyncStorage.setItem('phone', txt) }} />
                </Box>

                <Typography
                    variant={'subtitle2'}
                    marginX={3}>
                    About
                </Typography>
                <Box
                    borderX="1"
                    borderRadius="2xl"
                    backgroundColor={'white'}
                    margin={2}
                    padding={3}>
                    <Input
                        value={about}
                        color={'black'}
                        onChangeText={async (txt: string) => { setAbout(txt), await AsyncStorage.setItem('about', txt) }} />
                </Box>
            </ScrollView>
        </SafeAreaView>
    )
}