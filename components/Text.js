import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { Box } from '@chakra-ui/react'
 
const Text = ({ blok }) => (
	<Box className="">
		{render(blok.richtext)}
	</Box>
)
 
export default Text
