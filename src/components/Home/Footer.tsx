import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <>

      <Flex h='25vh' bg='#7873DE' flexDir='column' justifyContent='center' alignItems='center'>
        <Text color='white' fontWeight='600' fontSize='32px'>JOIN THE BIRD NEST</Text>
        <Text color='white' fontWeight='500' fontSize='14px'>Be the first to know about new products, special releases, and much more!</Text>

        <Button bg='blue.950' mt='10' color='white' borderRadius='25' px='5'>SIGN UP FOR OUR NEWSLETTER</Button>
      </Flex>

      <Flex height='50vh' bg='blue.900' px='40' py='20' direction='row' justifyContent='space-between'>
        <Flex flexDir='column'>
          <Text color='white' fontWeight='600' fontSize='21px' mb='2'>MORE KURZGESAGT</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>YouTube</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Agency</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>About</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Patreon</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Jobs</Text>
        </Flex>

        <Flex flexDir='column'>
          <Text color='white' fontWeight='600' fontSize='21px' mb='2'>GENERAL INFORMATION</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Help & FAQ</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Newsletter</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Contact</Text>
        </Flex>

        <Flex flexDir='column'>
          <Text color='white' fontWeight='600' fontSize='21px' mb='2'>SHIPPING & ORDERING</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Newsletter</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Contact</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>SHIPPING & ORDERING</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Payment</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Shipping</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Returns & Refunds</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Account</Text>
        </Flex>

        <Flex flexDir='column'>
          <Text color='white' fontWeight='600' fontSize='21px' mb='2'>LEGAL</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Legal Notice</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Terms & Conditions</Text>
          <Text color='white' fontWeight='500' fontSize='17px'>Privacy Policy</Text>
        </Flex>
      </Flex >
    </>
  )
}