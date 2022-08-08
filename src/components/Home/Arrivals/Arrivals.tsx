import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrivalsItem } from "./ArrivalsItem";

interface ObjetoProps {
  image: string;
  title: string;
  value: string;
  novo: boolean;
  bestseller: boolean;
  id: number;
}

interface ArriavalsProps {
  dados: Array<ObjetoProps>;
  mainTitle: string;
}

export function Arrivals({ dados, mainTitle }: ArriavalsProps) {
  return (
    <Box w='100%' paddingY='7vh' paddingX={['3rem', '3rem', '4rem', '5rem', '0']}>

      <Text textAlign='center' w='100%' color='blue.900' fontWeight='600' fontSize='26px' mb='8'>{mainTitle}</Text>

      <Flex marginX='auto' flexDir={['row', 'column', 'row', 'row', 'row']} justifyContent='space-between' wrap='wrap' maxW={['69rem', '69rem', '69rem', '69rem', '69rem']}>

        {dados.map((dado) => {
          return (
            <ArrivalsItem
              id={dado.id}
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