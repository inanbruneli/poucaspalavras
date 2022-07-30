import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import rightBackground from '../images/nature.jpg'

interface FirstSectionProps {
  mainTitle: string;
  secondTitle: string;
  btnTitle: string;
  colorLeft: string;
  imageRight: string;
}

export function MainSectionItem({ mainTitle, secondTitle, btnTitle, colorLeft, imageRight }: FirstSectionProps) {
  return (
    <Flex h='80vh' overflowY='hidden'>
      <Stack w='40%' bg={colorLeft} justifyContent='center' alignItems='center' spacing='5' paddingX='10' textAlign='center'>
        <Text color='white' fontSize='36' fontWeight='600'>{mainTitle}</Text>
        <Text color='white' fontSize='18' fontWeight='400'>{secondTitle}</Text>
        <Button borderRadius='20' fontSize='15' fontWeight='500' h='30' >{btnTitle}</Button>
      </Stack>

      <Box w='60%' >
        <Image src={imageRight} boxSize='100%'></Image>
      </Box>

    </Flex>
  )
}