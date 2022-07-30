import { Flex, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { RiShoppingCart2Fill } from "react-icons/ri";

export function Head() {
  return (
    <Flex w='100vw' bg='blue.900' height='9vh' alignItems='center' px='5' flexDir='row' justifyContent='space-between'>

      <Stack direction='row' spacing='10' alignItems='center'>
        <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/logo.gif?v=1613717913' boxSize={'50px'}></Image>
        <Text color='white' fontWeight='600' fontSize='18px'>Posters</Text>
        <Text color='white' fontWeight='600' fontSize='18px'>Notebooks & Journals</Text>
        <Text color='white' fontWeight='600' fontSize='18px'>Clothes</Text>
        <Text color='white' fontWeight='600' fontSize='18px'>Accessories</Text>
        <Text color='white' fontWeight='600' fontSize='18px'>Pins</Text>
        <Text color='white' fontWeight='600' fontSize='18px'>Collections</Text>
      </Stack>

      <Stack direction='row' spacing='5' alignItems='center' mr='5'>
        <Text color='white' fontWeight='600' fontSize='15px'>$ (USD)</Text>
        <Text color='white' fontWeight='600' fontSize='15px'>Help & FAQ</Text>
        <Icon as={RiShoppingCart2Fill} fontSize='25' color='white' />
      </Stack>
    </Flex >
  )
}