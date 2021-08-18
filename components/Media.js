import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
 
const Media = ({ blok }) => (
  <Box className="">
    <figure>
      <Image 
        src={blok.media.filename}
        alt={blok.media.alt}
        width={500}
        height={500}
      />
      <figcaption>{blok.caption}</figcaption>
    </figure>
  </Box>
)
 
export default Media
