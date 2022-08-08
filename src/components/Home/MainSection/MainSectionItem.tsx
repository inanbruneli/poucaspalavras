import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface FirstSectionProps {
  mainTitle: string;
  secondTitle: string;
  btnTitle: string;
  colorLeft: string;
  imageRight: string;
  href: string;
}

export function MainSectionItem({ mainTitle, secondTitle, btnTitle, colorLeft, imageRight, href }: FirstSectionProps) {
  return (
    <Flex overflowY='hidden' flexDir={['column-reverse', 'column-reverse', 'row', 'row', 'row']}>
      <Stack w={['100%', '100%', '40%', '40%', '40%']} paddingY={['12', '12', '0', '0', '0']} justifyContent='center' alignItems='center' spacing='5' paddingX='14' textAlign='center' bg={colorLeft}  >
        <Text color='white' fontSize={['23', '28', '31', '31', '36']} lineHeight={['30px', '32px', '36px', '38px', '38px']} fontWeight='600'>{mainTitle}</Text>
        <Text color='white' fontSize='18' fontWeight='500'>{secondTitle}</Text>

        <NextLink href={href} passHref>
          <Button borderRadius='20' fontSize='15' fontWeight='500' h='30'>{btnTitle}</Button>
        </NextLink>
      </Stack>
      <Box w={['100%', '100%', '60%', '60%', '60%']} h={['100%', '100%', '100%', '100%', '100%']}>
        <Image src={imageRight} boxSize='100%' ></Image>
      </Box>
    </Flex>
  )
}