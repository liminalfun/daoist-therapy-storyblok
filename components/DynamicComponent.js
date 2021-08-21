import { useRouter } from 'next/router'
import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'
import Text from './Text'
import Media from './Media'
import Youtube from './Youtube'
import Page from './Page'
 
// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'text': Text,
  'media': Media,
  'youtube': Youtube,
  'page': Page,
}
 
const DynamicComponent = ({blok}) => {
  const { isPreview } = useRouter()
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return isPreview ? (<SbEditable content={blok}><Component blok={blok} /></SbEditable>) : <Component blok={blok} />
  }
  
  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent