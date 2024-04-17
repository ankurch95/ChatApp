import React, { ComponentProps, ReactNode } from 'react';
import { Text } from 'native-base';

type Variant =
  | 'bigTitle'
  | 'title'
  | 'bigText'
  | 'subtitle1'
  | 'subtitle2'
  | 'body'
  | 'info'
  | 'description'
  | 'caption';

type TypographyProps = {
  variant: Variant;
  color?: string;
  children?: ReactNode | string;
} & Partial<ComponentProps<typeof Text>>;

const typographyMap: Record<
  Variant,
  Pick<ComponentProps<typeof Text>, 'lineHeight' | 'fontSize'|'fontWeight'>
> = {
  bigTitle: {
    fontSize: '6xl',
    fontWeight: "bold"
    // lineHeight: 35,
  },
  title: {
    fontSize: '4xl',
    fontWeight: "bold"
    // lineHeight: 30,

  },
  bigText: {
    fontSize: '2xl',
    fontWeight: "bold"
    // lineHeight: 25,
  },
  subtitle1: {
    fontSize: 'xl',
    fontWeight: "bold"
    // lineHeight: 23,
  },
  subtitle2: {
    fontSize: 'lg',
    fontWeight: "bold"
    // lineHeight: 21,
  },
  body: {
    fontSize: 'md',
    fontWeight: "normal"
    // lineHeight: 18,
  },
  info: {
    fontSize: 'sm',
    // lineHeight: 16,
  },
  description: {
    fontSize: 'xs',
    // lineHeight: 14,
  },
  caption: {
    fontSize: '2xs',
    // lineHeight: 12,
  },
};

export const Typography = ({
  variant,
  color,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Text
      fontWeight="normal"
      color={color ?? 'gray.900'}
      {...typographyMap[variant]}
      {...props}
    >
      {children}
    </Text>
  );
};