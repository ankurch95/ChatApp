import React, { ComponentProps } from 'react';
import { HStack } from 'native-base';
import { Typography } from './Typography';

type Props = {
  variant?: 'description' | 'body';
  message: string;
  textColor:string
} & Pick<ComponentProps<typeof HStack>, 'bg'>;

export const Toast = ({
  variant = 'body',
  message,
  textColor='black',
  bg = 'gray.100',
}: Props) => {
  return (
    <HStack
      alignItems="center"
      bg={bg}
      borderRadius={16}
      px={3}
      py={4}
      space={1.5}
      mb={12}
    >
      <Typography 
      variant={variant}
      style={{color:textColor}}>{message}</Typography>
    </HStack>
  );
};