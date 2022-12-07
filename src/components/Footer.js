import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/strongman.png';

const Footer = () => {
  return (
    <Box
    mt="80px"
    bgcolor="#fff3f4"
    >
      <Stack
      gap="40px"
      alignItems="center"
      px="40px"
      pt="24px"
      >
        <img src={Logo} alt="logo" width="100px" height="80px" alignItems="center" />
         <Typography
         alignItems="center"
          variant="h2" mt="5px"
          fontWeight="600"
          fontSize="1.5rem"
          color="#ff2526">
        FIT FAST
          </Typography>
        <Typography
        alignItems="center"
          variant="h5" pb="20px" mt="10px"
          fontSize="1rem"
          fontWeight="Bold">
          Designed and Developed by Eng.Muhammad Mohsin Raza
          </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
