import React from 'react'
import { Button } from '@chakra-ui/react'
 
const Btn = ({ blok }) => (
  <Button variant={blok.style}>
    {blok.text}
    {blok.link}
  </Button>
)
 
export default Btn