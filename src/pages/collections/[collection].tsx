import { Box, Flex, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ArrivalsItem } from "src/components/Home/Arrivals/ArrivalsItem";
import { Footer } from "src/components/Home/Footer";
import { Head } from "src/components/Home/Head";
import dataPoster from 'src/data/posters.json';
import dataCapa from 'src/data/capa.json';

interface CollectionProps {
  collection: string;
}

export default function Collection({ collection }: CollectionProps) {
  const data = dataPoster.filter((item) => item.collection == collection);
  const capa = dataCapa.filter((item) => item.collection == collection)[0].image;

  return (
    <Box overflowX='hidden'>
      <Head />

      <Flex paddingY={'7vh'}>
        <Image
          boxSize={['100%', '100%', '90%', '80%', '65%']}
          marginX='auto'
          src={capa}
        >
        </Image>
      </Flex>

      <Box w='100%' paddingY='7vh' paddingX={['3rem', '3rem', '4rem', '5rem', '0']}>
        <Flex marginX='auto' flexDir={['row', 'column', 'row', 'row', 'row']} justifyContent='space-between' wrap='wrap' maxW={['69rem', '69rem', '69rem', '69rem', '69rem']}>
          {data.map((dado) => <ArrivalsItem id={Number(dado.id)} imagem={dado.images[0]} title={dado.mainTitle} value={dado.value} novo={false} bestseller={false} />)}
        </Flex>
      </Box>

      <Footer />
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  return {
    props: {
      collection: params.collection
    }
  }
}