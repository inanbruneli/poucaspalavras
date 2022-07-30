import { Flex, Text } from "@chakra-ui/react";

interface BlueTitleProps {
  title: string;
  subtitle: string;
}

export function BlueTitle({ title, subtitle }: BlueTitleProps) {
  return (
    <Flex width='100%' flexDir='column' justifyContent='center' alignItems='center' my='20'>
      <Text color='blue.800' fontWeight='600' fontSize='36px'>{title}</Text>
      <Text color='blue.800' fontWeight='500' fontSize='18px'>{subtitle}</Text>
    </Flex>
  )
}