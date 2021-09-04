import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import {   
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
 
const FaqItem = ({
  heading,
  text
}) => (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {heading}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {render(text)}
      </AccordionPanel>
    </AccordionItem>
)
 
export default FaqItem