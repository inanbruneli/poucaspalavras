import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { ArrivalsItem } from "src/components/Home/Arrivals/ArrivalsItem";
import { Footer } from "src/components/Home/Footer";
import { Head } from "src/components/Home/Head";
import dataPoster from 'src/data/posters.json';

interface ProductProps {
  id: number;
}

export default function Product({ id }: ProductProps) {
  const [mightAlsoLike, setMightAlsoLike] = useState([dataPoster[0], dataPoster[1], dataPoster[2]])
  const data = dataPoster.filter((item) => item.id == id)[0];
  const [mainImage, setMainImage] = useState(data.images[0]);
  const [sideImages, setSideImages] = useState(data.images);

  function changeMainImage(item) {
    setMainImage(item);
  }

  return (
    <Box overflowX='hidden'>
      <Head />

      <Flex paddingX='18%' paddingY='3%' flexDir='column' justifyContent='center' alignItems='center'>
        <Flex h='100%' w='100%' justifyContent='space-between' mb='3'>

          <Flex w='50%' justifyContent='space-between'>

            <Stack w='20%' spacing='3' paddingX='2' alignItems='center' py='3'>

              {sideImages.map((item) => {
                return (
                  <>
                    {
                      item == mainImage ? (
                        <Image src={item}
                          boxSize='75%'
                          boxShadow='outline'
                          boxSizing='border-box'
                          onClick={() => changeMainImage(item)}
                        >
                        </Image>
                      ) : (
                        <Image
                          src={item}
                          boxSize='75%'
                          boxSizing='border-box'
                          onClick={() => changeMainImage(item)}
                        >
                        </Image>
                      )
                    }
                  </>
                )
              })}

            </Stack>
            <Flex w='78%' bg='red'>
              <Image src={mainImage} boxSize='100%'></Image>
            </Flex>

          </Flex>

          <Flex w='47%' flexDir='column'>
            <Text color='blue.800' fontWeight='600' fontSize='17px'>{data.blueTitle}</Text>

            <Text fontWeight='600' fontSize='32px' color='#22292f' lineHeight='35px'>{data.mainTitle}</Text>
            <Text fontWeight='500' fontSize='22px' color='#22292f' mb='10'>{data.value}</Text>
            <Text fontWeight='500' fontSize='16px' color='#22292f' mb='5'>{data.description}</Text>

            {data.list.map((content) => {
              return <Text fontWeight='500' fontSize='16px' color='#22292f'>{content}</Text>
            })}

            <Text fontWeight='400' fontSize='14px' color='#8e8e8e' mt='5'>Worldwide shipping</Text>
            <Text fontWeight='400' fontSize='14px' color='#8e8e8e' mb='3'>Dispatched in 3 – 5 business days.</Text>

            <Button w='100%' bg='#D0064D' color='white' fontSize='18px' fontWeight='500' borderRadius='20'>ADD TO CARD</Button>


          </Flex>

        </Flex>

        <Flex flexDir='column' >
          <Text textAlign='center' mt='10' color='#101010' fontWeight='600' fontSize='32px' w='100%' >YOU MIGHT ALSO LIKE</Text>

          <Flex mt='10'>
            {mightAlsoLike.map((item) => {
              return <ArrivalsItem id={item.id} bestseller={false} novo={false} title={item.mainTitle} value={item.value} imagem={item.images[0]} />
            })}

          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  return {
    props: {
      id: params.id
    }
  }
}