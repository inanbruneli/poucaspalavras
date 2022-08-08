import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface MenuItemProps {
  href: string;
  text: string;
}

export function MenuItem({ href, text }: MenuItemProps) {
  return (
    <NextLink href={href} passHref>
      <Text color='white' fontWeight='600' fontSize='18px' cursor='pointer' _hover={{ borderBottom: '2px solid white' }} boxSizing='border-box' transition='.2s'>{text}</Text>
    </NextLink>
  )
}