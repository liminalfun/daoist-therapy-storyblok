import React from "react";
import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Storyblok from "storyblok-js-client";

const Links = ["Ba Zi", "Classes & Instruction", "Online Courses", "About", "Contact"];

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={children}>
		{children}
	</Link>
);

export async function getStaticProps() {

  const res = await fetch(Storyblok.get('cdn/stories'))
	const stories = await res.json()
 

  return {
    props: {
      stories,
		}
  }
};

const pages = (stories) => (
	console.log(this)
);

pages();

export default function Nav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<nav>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}>
					<HStack spacing={8} direction={{base: "column", md:"row"}} justifyContent={"space-between"} w="full"alignItems={"center"}>
						<Box>Daoist Therapy</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((link) => (
								<NavLink href={link} key={link}>
									{link}
								</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</nav>
	);
}
