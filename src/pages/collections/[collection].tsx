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

      <Flex paddingY='7vh'>
        <Image
          boxSize='65%'
          marginX='auto'
          src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/220506_Posters_Collection_desktop_1296x.jpg?v=11008427675408508083 '
        >
        </Image>
      </Flex>

      <Flex marginX='auto' flexDir='row' justifyContent='space-between' wrap='wrap' w={['150vh', '150vh', '150vh', '150vh', '150vh', '120vh']}>

        {data.map((dado) => {
          return (
            <ArrivalsItem
              id={dado.id}
              imagem={dado.images[0]}
              title={dado.mainTitle}
              value={dado.value}
              novo={false}
              bestseller={false}
            />
          )
        })}
      </Flex>

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