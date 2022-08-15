import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { MainSection } from "../components/Home/MainSection/MainSection";
import { Head } from "../components/Home/Head";
import { Arrivals } from "src/components/Home/Arrivals/Arrivals";
import { MainSectionItem } from "src/components/Home/MainSection/MainSectionItem";
import { BlueTitle } from "src/components/Home/BlueTitle";
import { ExploreImages } from "src/components/Home/ExploreImages";
import { Pic2 } from "src/components/Home/Pic2";
import { Footer } from "src/components/Home/Footer";
import dataPoster from 'src/data/posters.json';


export default function Home() {

  const dataExplore = [
    { image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Banner_Explore_Space_02.jpg?crop=center&v=1627230726&width=720', title: 'EXPLORE SPACE' },
    { image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Banner_Explore_Dinosaurs.jpg?crop=center&v=1627230831&width=720', title: 'EXPLORE FASCINATING CREATURES' },
    { image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Banner_Explore_Biology.jpg?crop=center&v=1627230906&width=720', title: 'EXPLORE SCIENCE' },
  ]

  const dataArrivals = [
    { id: 1, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_EE_HumanCell_FRONT.jpg?crop=center&v=1649159841&width=540', title: 'Human Cell Poster', value: '$19.90 USD', novo: true },
    { id: 46, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Dadhat_Earth_Blue_Front.jpg?crop=center&v=1655800545&width=720', title: 'Dad Hat Blue', value: '$26.90 USD', novo: true },
    { id: 3, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_EE_WorldMap_Globalisation_Front.jpg?crop=center&v=1655799969&width=720', title: 'Human Perspective World Map Poster', value: '$19.90 USD', novo: true },
    { id: 27, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_PocketLogs_Lake_Front.jpg?crop=center&v=1651660220&width=720', title: 'Pocket Log – Lake Collection', value: '$11.90 USD', novo: true },
    { id: 30, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_PocketLogs_Treasure_Front.jpg?crop=center&v=1651660275&width=720', title: 'Pocket Log – Treasure Collection', value: '$11.90 USD', novo: false },
    { id: 58, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Jobs_Astronaut_Front_9a564f7d-a742-48f3-a3cf-150a61cc7e24.jpg?crop=center&v=1609357132&width=720', title: 'Astronaut Duck Enamel Pin', value: '$14.90 USD', novo: false },
  ]

  const dataPosters = [
    { id: 3, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_EE_WorldMap_Globalisation_Front.jpg?crop=center&v=1655799969&width=540', title: 'Human Perspective World Map Poster', value: '$19.90 USD', novo: true },
    { id: 5, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Mars_Front.jpg?crop=center&v=1646667959&width=540', title: 'Mars Base Infographic Poster', value: '$17.90 USD', novo: false },
    { id: 10, bestseller: true, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_DeapSea_Rework_Front_US.jpg?crop=center&v=1649164247&width=540', title: 'Deep Sea Poster', value: '$17.90 USD', novo: false },
    { id: 1, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_StarMap_Front_MOOORESPARCLE.jpg?crop=center&v=1637146365&width=540', title: 'The Night Sky Poster', value: '$24.90 USD', novo: false },
    { id: 2, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_DinoInfo_Front.jpg?crop=center&v=1622629973&width=540', title: 'Dinosaur Infographic Poster', value: '$17.90 USD', novo: false },
    { id: 15, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_EE_HumanCell_FRONT.jpg?crop=center&v=1649159841&width=540', title: 'Human Cell Poster', value: '$19.90 USD', novo: true },
  ]

  const dataBook = [
    { id: 25, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_HabitJournal_Front.jpg?crop=center&v=1649946008&width=540', title: 'Habit Journal', value: '$24.90 USD', novo: true },
    { id: 26, bestseller: true, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Gratitude_Front.jpg?crop=center&v=1609356894&width=540', title: 'Gratitude Journal', value: '$17.90 USD', novo: false, },
    { id: 27, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_PocketLogs_Lake_Front.jpg?crop=center&v=1651660220&width=540', title: 'Pocket Log – Lake Collection', value: '$11.90 USD', novo: false },
    { id: 31, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_PocketLogs_Treasure_Front.jpg?crop=center&v=1651660275&width=540', title: 'Pocket Log – Treasure Collection', value: '$24.90 USD', novo: false },
    { id: 28, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Ocean_Notebook_Front.jpg?crop=center&v=1602689176&width=540', title: 'Ocean Explorer Notebook', value: '$12.90 USD', novo: false },
    { id: 29, bestseller: false, image: 'https://cdn.shopify.com/s/files/1/0254/0516/1520/products/01_Notepad_Desert_Front.jpg?crop=center&v=1626952193&width=540', title: 'Desert Oasis Notepad', value: '$10.90 USD', novo: true },
  ]

  return (
    <Box overflowX='hidden'>
      <Head />
      <MainSection />
      <Arrivals dados={dataArrivals} mainTitle='NEW ARRIVALS' />

      <MainSectionItem
        href='../collections/poster'
        mainTitle='Get Inspired by Science'
        secondTitle="We aim to create products that spark your curiosity."
        btnTitle="Explore Our Bestsellers >"
        colorLeft="#222853"
        imageRight="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/211210_NewYear_MAin_Banner.jpg?crop=center&v=1639157873&width=1296"
      />

      <BlueTitle title='WE LOVE CREATING SCIENCE-Y THINGS' subtitle="And we're pretty good at it: over 16 million subscribers watch our videos on Youtube." />

      <ExploreImages dados={dataExplore} />

      <Arrivals dados={dataPosters} mainTitle='LEARN MORE ABOUT THE WORLD WITH OUR INFOGRAPHIC POSTERS' />

      <Pic2 />

      <BlueTitle title='WE CREATE PRODUCTS THAT SPARK CURIOSITY' subtitle="FOR SCIENCE, NATURE AND LIFE ITSELF." />

      <Arrivals dados={dataBook} mainTitle='JOURNAL WITH US' />

      <MainSectionItem
        href='../collections/pins'
        mainTitle='ABOUT KURZGESAGT'
        secondTitle="We are a Germany based animation studio, production house and design studio."
        btnTitle="More >"
        colorLeft="#7873DE"
        imageRight="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Banner_About.jpg?crop=center&v=1627231831&width=1512"
      />

      <Flex flexDir='column' alignItems='center' my='20' wrap='wrap'>
        <Text color='blue.900' fontWeight='600' fontSize='32px' mb='5'>Follow @kurzgesagt on instagram</Text>
        <Stack direction='row' wrap='wrap' justifyContent='center' alignItems='center'>

          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/04_You_Are_Awesome.jpg?crop=center&v=1627232154&width=340' boxSize='25vh'></Image>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/03_Post_TopDrop-1.jpg?crop=center&v=1627232175&width=340' boxSize='25vh'></Image>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/04_PatreonBTS_Post-1.jpg?crop=center&v=1627232213&width=340' boxSize='25vh'></Image>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/05_NewStuff_Post-1.jpg?crop=center&v=1627232234&width=340' boxSize='25vh'></Image>
          <Image src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/03_WallPanorama_Post_02-3.png?crop=center&v=1627232264&width=340' boxSize='25vh'></Image>
        </Stack>
      </Flex >

      <Footer />

    </Box >
  )
}
