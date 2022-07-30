import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    blue:{
      '950': '#020113',
      '900': '#111032',
      '850': '#342F9D',
      '800': '#4A43D3',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    }
  },
  gray:{
    '500': '#22296B',
  },
  fonts:{
    heading: 'Montserrat',
    body:'Montserrat'
  },
  styles:{
    global:{
    }
  }
})