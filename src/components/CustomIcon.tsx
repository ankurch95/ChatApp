import React, { ComponentProps } from 'react';
import { Icon as _Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomIcon = (props: Omit<ComponentProps<typeof _Icon>, 'as'>) => {
  return <_Icon as={MaterialCommunityIcons} {...props} />;
};