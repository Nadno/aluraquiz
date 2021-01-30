import React from 'react';
import NextLink from 'next/link';

interface Props {
  [propName: string]: any;
}

export default function Link({ children, href, ...props }: Props) {
  return (
    <NextLink href={href}  passHref>
      <a {...props} >{children}</a>
    </NextLink>
  )
}