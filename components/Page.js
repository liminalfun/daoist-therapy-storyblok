import DynamicComponent from "./DynamicComponent";
import {
	Box
} from "@chakra-ui/react";
 
const Page = ({ blok }) => (
  <main>
    <Box p="6">
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </Box>
  </main>
);
 
export default Page;