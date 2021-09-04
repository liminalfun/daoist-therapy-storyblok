import React from 'react'
import FaqItem from './FaqItem';
import {   
  Accordion,
} from '@chakra-ui/react'
 
const Faq = ({ blok }) => (
	<Accordion allowToggle>
    <h2>{blok.title}</h2>

    {blok.faq_items.map((faq) => (
      <FaqItem
        key={faq._uid}
        heading={faq.heading}
        text={faq.text}
      />
    ))}
  </Accordion>
)
 
export default Faq