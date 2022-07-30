import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrivalsItem } from "./ArrivalsItem";

interface ObjetoProps {
  image: string;
  title: string;
  value: string;
  novo: boolean;
  bestseller: boolean;
}

interface ArriavalsProps {
  dados: Array<ObjetoProps>;
  mainTitle: string;
}

export function Arrivals({ dados, mainTitle }: ArriavalsProps) {
  return (
    <Box w='100%' paddingY='7vh'>

      <Text textAlign='center' w='100%' color='blue.900' fontWeight='600' fontSize='26px' mb='8'>{mainTitle}</Text>

      <Flex marginX='auto' flexDir='row' justifyContent='space-between' wrap='wrap' w={['150vh', '150vh', '150vh', '150vh', '150vh', '120vh']}>

        {dados.map((dado) => {
          return (
            <ArrivalsItem

              imagem={dado.image}
              title={dado.title}
              value={dado.value}
              novo={dado.novo}
              bestseller={dado.bestseller}
            />
          )
        })}
      </Flex>


    </Box>

  )
}