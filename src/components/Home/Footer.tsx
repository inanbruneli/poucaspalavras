import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <>

      <Flex h='25vh' bg='#7873DE' flexDir='column' justifyContent='center' alignItems='center' textAlign='center'>
        <Text color='white' fontWeight='600' fontSize='32px'>JOIN THE BIRD NEST</Text>
        <Text color='white' fontWeight='500' fontSize='14px'>Be the first to know about new products, special releases, and much more!</Text>

        <Button bg='blue.950' mt='10' color='white' borderRadius='25' px='5'>SIGN UP FOR OUR NEWSLETTER</Button>
      </Flex>

      <Flex height={['65vh','50vh','50vh','50vh','50vh']} bg='blue.900' py='20' direction={['column','row','row','row','row']} justifyContent={'space-around'}>
        <Flex flexDir='column'  textAlign='center' w={['100%','180px','180px','100%','100%']}>
          <Text color='white' fontWeight='600' fontSize={['17px','18px','18px','21px','21px']} mb='2'>MORE KURZGESAGT</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>YouTube</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Agency</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>About</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Patreon</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Jobs</Text>
        </Flex>

        <Flex flexDir='column'  textAlign='center' w={['100%','180px','180px','100%','100%']}>
          <Text color='white' fontWeight='600' fontSize={['17px','18px','18px','21px','21px']} mb='2'>GENERAL INFORMATION</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Help & FAQ</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Newsletter</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Contact</Text>
        </Flex>

        <Flex flexDir='column'  textAlign='center' w={['100%','180px','180px','100%','100%']}>
          <Text color='white' fontWeight='600' fontSize={['17px','18px','18px','21px','21px']} mb='2'>SHIPPING & ORDERING</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Newsletter</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Contact</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>SHIPPING & ORDERING</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Payment</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Shipping</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Returns & Refunds</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Account</Text>
        </Flex>

        <Flex flexDir='column' textAlign='center'  w={['100%','180px','180px','100%','100%']} >
          <Text color='white' fontWeight='600' fontSize={['17px','18px','18px','21px','21px']} mb='2'>LEGAL</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Legal Notice</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Terms & Conditions</Text>
          <Text color='white' fontWeight='500' fontSize={['13px','15px','15px','17px','17px']}>Privacy Policy</Text>
        </Flex>
      </Flex >
    </>
  )
}