import React from 'react'
import Image from 'next/image'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const storyblok = ({ src, focus, width, height }) => {
  var ogImg = `${src}`
  var optImg = ogImg.replace("https://a.storyblok.com", "")
  var width = "400"
  var height="200"
  var focus = "122x113:123x114"
  return `https://img2.storyblok.com/${width}x${height}/filters:focal(${focus})${optImg}`
}

const Feature = ({ blok }) => (
    <Box maxW="xs" border="1px" borderColor="gray.600" p="4" mt="8" borderRadius="1em" position="relative">
      { blok.image && 
        <Box position="relative" h="100px">
          <Image 
            loader={storyblok}
            src={blok.image.filename}
            alt={blok.image.alt}
            focus={blok.image.focus}
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </Box>
      }
      <Heading as="h4">{blok.name}</Heading>
      <Text pt="2" pb="4">{blok.description}</Text>
      { blok.text &&
        <Button href={blok.link} variant={blok.style}>
          {blok.text}
        </Button>
      }
    </Box>
)
 
export default Feature