import { Box, Flex, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ArrivalsItem } from "src/components/Home/Arrivals/ArrivalsItem";
import { Footer } from "src/components/Home/Footer";
import { Head } from "src/components/Home/Head";
import dataPoster from 'src/data/posters.json';

interface CollectionProps {
  collection: string;
}

export default function Collection({ collection }: CollectionProps) {
  const data = dataPoster.filter((item) => item.collection == collection);

  return (
    <Box overflowX='hidden'>
      <Head />

      <Flex paddingY={'7vh'}>
        <Image
          boxSize={['100%', '100%', '90%', '80%', '65%']}
          marginX='auto'
          src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/220506_Posters_Collection_desktop_1296x.jpg?v=11008427675408508083 '
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