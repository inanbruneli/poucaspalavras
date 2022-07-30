import { Box, Button, Image, Stack } from "@chakra-ui/react";

interface ObjetoProps {
  title: string;
  image: string;
}

interface ExploreImagesProps {
  dados: Array<ObjetoProps>;
}

export function ExploreImages({ dados }: ExploreImagesProps) {
  return (
    <Stack spacing='5' direction='row' paddingX='10'>
      {dados.map((dado) => {
        return (
          <Box position='relative'>
            <Image src={dado.image} boxSize='100%'></Image>
            <Button top='85%' left='50%' transform='translate(-50%, -50%)' position='absolute' borderRadius='20' fontSize='15' fontWeight='500' h='30' bg='blue.800' color='white'>{dado.title}</Button>
          </Box>
        )
      })}
    </Stack >
  )
}