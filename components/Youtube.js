import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { Box, Heading } from '@chakra-ui/react'
 
const Youtube = ({ blok }) => (
  <Box mt="1em" mb="3em">
    <Box py="1em">
      <Heading as="h2" mb="0.5em">
        {blok.title}
      </Heading>
      {render(blok.description)}
    </Box>
    <Box
      h="sm"
      w="full"
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${blok.video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  </Box>
)
 
export default Youtube