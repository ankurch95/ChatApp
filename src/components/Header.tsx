import React from 'react';
import { VStack, HStack, Center } from 'native-base';
import { Typography } from './Typography';
import { useNavigation } from '@react-navigation/native';
import { CustomIcon } from './CustomIcon';
import { View } from 'react-native';

interface HeaderProps {
    variant?: 'left' | 'center';
    hasBackButton?: boolean;
    title?: string;
    description?: string;
}

export const Header = ({
    variant = 'left',
    hasBackButton = true,
    title,
    description,
}: HeaderProps) => {
    const navigation = useNavigation();

    return (
        <VStack space={3} style={{ elevation: 20, paddingVertical: 15 }}>
            <HStack space={3.5} alignItems="center">
                {hasBackButton && (
                    <View style={{marginHorizontal:20}}>
                    <CustomIcon
                        name='arrow-left'
                        color={'black'}
                        size={6}
                        onPress={navigation.goBack} />
                        </View>
                )}
                {variant === 'center' ? (
                    <Typography bold variant="title">
                        {title}
                    </Typography>
                ) : (
                    <Center flex={1} pr={hasBackButton ? 10 : 0}>
                        <Typography bold variant="subtitle2">
                            {title}
                        </Typography>
                    </Center>
                )}
            </HStack>
            {description && variant === 'left' && (
                <Typography variant="body">{description}</Typography>
            )}
        </VStack>
    );
};