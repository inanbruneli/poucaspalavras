import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ArrivalsItemProps {
  novo: boolean;
  bestseller: boolean;
  imagem: string;
  title: string;
  value: string;
}

export function ArrivalsItem({ novo, imagem, title, value, bestseller }: ArrivalsItemProps) {
  return (
    <Box position='relative'>
      <Flex w='350px' h='350px' flexDir='column' mb='12vh' mr='3' >
        <Image
          src={imagem}
          boxSize='100%'
          mb='3'
        >
        </Image>
        <Text color='#22296B' fontWeight='600'>{title}</Text>
        <Text color='#8e8e8e' fontWeight='500'>{value}</Text>


      </Flex >
      {novo && (
        <Flex position='absolute' w='60px' h='60px' bg='blue.800' borderRadius='50%' right='0' top='-5' justifyContent='center' alignItems='center' >
          <Text color='white' fontWeight='600' fontSize='12px'>NEW</Text>
        </Flex>
      )}

      {bestseller && (
        <Flex position='absolute' w='60px' h='60px' bg='#DEC721' borderRadius='50%' right='0' top='-5' justifyContent='center' alignItems='center' >
          <Text color='white' fontWeight='600' fontSize='12px' textAlign='center'>BEST SELLER</Text>
        </Flex>
      )}

    </Box>
  )
}