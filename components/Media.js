import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'


 
const Media = ({ blok }) => (
  <Box className="">
    <img src={blok.media.filename} alt={blok.media.alt}/>
  </Box>
)
 
export default Media
