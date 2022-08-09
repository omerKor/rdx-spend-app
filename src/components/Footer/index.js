import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Footer() {
  return (
    <Box height={100} alignItems='center' backgroundColor='blue' m='auto'>
      <Text paddingTop='10px' color='white' mt={5} mb={5}>Edited by Ömer Kor</Text>
      <Button marginRight='1rem' colorScheme='gray' leftIcon={<SiGithub />} >
        <a href='https://github.com/omerKor' target='_blank'>Github</a>
      </Button>
      <Button me={5} type='linkedin' leftIcon={<SiLinkedin />} >
        <a href='https://www.linkedin.com/in/omerkor/' target='_blank'>Linkedin</a>
      </Button>

    </Box>
  )
}

export default Footer;
