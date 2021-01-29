import React from 'react';
import NextLink from 'next/link';

interface Props {
  children: any;
  href: string;
  [propName: string]: string;
}

export default function Link({ children, href, ...props }: Props) {
  return (
    <NextLink href={href}  passHref>
      <a {...props} >{children}</a>
    </NextLink>
  )
}