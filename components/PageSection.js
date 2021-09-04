import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { Box, Heading } from '@chakra-ui/react'
 
const PageSection = ({ blok }) => (
	<Box className="">
    <Heading as="h2">{ blok.heading }</Heading>
    <Box>
		  {render(blok.text)}
    </Box>
	</Box>
)
 
export default PageSection