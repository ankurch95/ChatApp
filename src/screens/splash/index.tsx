import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { AppStackScreenProps } from '../../navigation/AppStackNavigator'
import { styles } from './styles'


export const SplashScreen = ({
    navigation,
}: AppStackScreenProps<'SplashScreen'>) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AuthScreen')
        }, 2000);
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Splash Screen</Text>
            </View>
        </SafeAreaView>
    )
}