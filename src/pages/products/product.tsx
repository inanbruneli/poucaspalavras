import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ArrivalsItem } from "src/components/Home/Arrivals/ArrivalsItem";
import { Footer } from "src/components/Home/Footer";
import { Head } from "src/components/Home/Head";

export default function Product() {
  const dataImages = [
    { id: 1, src: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_EE_WorldMap_Globalisation_Front.jpg?crop=center&v=1655799969&width=540' },
    { id: 2, src: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/02_EE_WorldMap_Globalisation_Detail1.jpg?crop=center&v=1655799969&width=540' },
    { id: 3, src: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/03_EE_WorldMap_Globalisation_Detail2.jpg?crop=center&v=1655799969&width=540' },
    { id: 4, src: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/03_EE_WorldMap_Globalisation_Detail3.jpg?crop=center&v=1655799969&width=540' },
    { id: 5, src: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/04_EE_WorldMap_Globalisation_Serviervorschlag.jpg?crop=center&v=1655799969&width=540' },
  ]

  const [mainImage, setMainImage] = useState(dataImages[0]);
  const [sideImages, setSideImages] = useState(dataImages);

  function changeMainImage(item) {
    console.log(item)
    setMainImage(item)
    /* const reloadSideImages = sideImages;
    setSideImages(reloadSideImages); */
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
                      item.src == mainImage.src ? (
                        <Image src={item.src} boxSize='75%'
                          border='1px solid #CCC'
                          boxSizing='border-box'
                          onClick={() => changeMainImage(item)}
                        >
                        </Image>
                      ) : (
                        <Image src={item.src} boxSize='75%'
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
              <Image src={mainImage.src} boxSize='100%'></Image>
            </Flex>

          </Flex>

          <Flex w='47%' flexDir='column'>
            <Text color='blue.800' fontWeight='600' fontSize='17px'>Education Edition</Text>

            <Text fontWeight='600' fontSize='32px' color='#22292f' lineHeight='35px'>Human Perspective World Map Poster</Text>
            <Text fontWeight='500' fontSize='22px' color='#22292f' mb='10'>$19.90</Text>
            <Text fontWeight='500' fontSize='16px' color='#22292f' mb='5'>We created this map of the world's population with a special projection method that depicts
              countries closer to their actual size than traditional maps.</Text>


            <Text fontWeight='500' fontSize='16px' color='#22292f'>° 33.0" × 23.4"</Text>
            <Text fontWeight='500' fontSize='16px' color='#22292f'>° Heavy, high-quality paper, vibrant colors</Text>
            <Text fontWeight='500' fontSize='16px' color='#22292f' mb='5'>° Frame not included</Text>

            <Text fontWeight='400' fontSize='14px' color='#8e8e8e'>Worldwide shipping</Text>
            <Text fontWeight='400' fontSize='14px' color='#8e8e8e' mb='3'>Dispatched in 3 – 5 business days.</Text>

            <Button w='100%' bg='#D0064D' color='white' fontSize='18px' fontWeight='500' borderRadius='20'>ADD TO CARD</Button>


          </Flex>

        </Flex>

        <Flex flexDir='column' >
          <Text textAlign='center' mt='10' color='#101010' fontWeight='600' fontSize='32px' w='100%' >YOU MIGHT ALSO LIKE</Text>

          <Flex mt='10'>
            <ArrivalsItem bestseller={false} novo={false} title='The Night Sky Poster' value="$24.90 USD" imagem='https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_StarMap_Front_MOOORESPARCLE.jpg?crop=center&v=1637146365&width=540' />
            <ArrivalsItem bestseller={false} novo={false} title='Dinosaur Infographic Poster' value="$17.90 USD" imagem='https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_DinoInfo_Front.jpg?crop=center&v=1622629973&width=540' />
            <ArrivalsItem bestseller={false} novo={false} title='Kurzgesagt Alphabet Poster' value="$17.90 USD" imagem='https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Duck_DuckABC_Front.jpg?crop=center&v=1643642827&width=540' />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  )
}