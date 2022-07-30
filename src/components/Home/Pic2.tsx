import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

export function Pic2() {
  return (
    <>
      <Text textAlign='center' w='100%' fontWeight='600' fontSize='24px' color='blue.900' mb='10'>
        SHOW YOU'RE PART OF THE KURZGESAGT COMMUNITY
      </Text>

      <Stack spacing='5' direction='row' paddingX='10'>

        <Box position='relative' height='50%'>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/07_Mai_FP_Clothes.jpg?crop=center&v=1621802665&width=1080' boxSize='100%'></Image>
          <Button top='85%' left='50%' transform='translate(-50%, -50%)' position='absolute' borderRadius='20' fontSize='15' fontWeight='500' h='30' bg='blue.800' color='white'>SHOP CLOTHES</Button>
        </Box>

        <Box position='relative'>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Banner_Duck.jpg?crop=center&v=1627231644&width=1080' boxSize='100%'></Image>
          <Button top='85%' left='50%' transform='translate(-50%, -50%)' position='absolute' borderRadius='20' fontSize='15' fontWeight='500' h='30' bg='blue.800' color='white'>SHOP DUCKS</Button>
        </Box>



      </Stack >
    </>
  )
}