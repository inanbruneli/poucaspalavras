import { Flex, Icon, Image, Stack, Text, } from "@chakra-ui/react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MenuItem } from "../MenuItem";
import NextLink from "next/link";

export function Head() {


  return (
    <Flex w='100vw' bg={'blue.900'} height='9vh' alignItems='center' px='5' flexDir='row' justifyContent='space-between'>

      <Stack direction='row' spacing='10' alignItems='center'>
        <NextLink href='/' passHref>
          <Flex w={['250px', '600px', '800px', '900px', '100%']} alignItems='center' justifyContent='center' cursor='pointer'>
            <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/logo.gif?v=1613717913' boxSize={'50px'}></Image>
          </Flex >
        </NextLink>

        <Stack direction='row' spacing='10' alignItems='center' display={['none', 'none', 'none', 'none', 'flex']}>
          <MenuItem href='../collections/poster' text="Posters" />
          <MenuItem href='../collections/notebooks' text="Notebooks & Journals" />
          <MenuItem href='../collections/clothes' text="Clothes" />
          <MenuItem href='../collections/accessories' text="Accessories" />
          <MenuItem href='../collections/pin' text="Pins" />
        </Stack>
      </Stack>

      <Stack direction='row' spacing='5' alignItems='center' mr='5'>
        <Text color='white' fontWeight='600' fontSize='15px'>$ (USD)</Text>
        <Icon as={RiShoppingCart2Fill} fontSize='25' color='white' />
      </Stack>
    </Flex >
  )
}