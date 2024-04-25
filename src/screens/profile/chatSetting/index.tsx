import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { CustomIcon, Header, Typography } from '../../../components'
import { Box, View } from 'native-base'

export const ChatSettingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Chats'} />
            <Box
                borderX="1"
                borderRadius="2xl"
                backgroundColor={'white'}
                margin={2}
                padding={3}
                flexDirection={'row'}>

                <CustomIcon name='theme-light-dark' color={'black'} size={5} />
                <View style={{ marginLeft: 15 }}>
                    <Typography variant='info'>
                        Theme
                    </Typography>
                </View>
            </Box>
        </SafeAreaView>
    )
}