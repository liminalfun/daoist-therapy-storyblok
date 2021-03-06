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
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								href="/ba-zi">
								Ba Zi
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								href="/classes-instruction">
								Classes & Instruction
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								href="/online-courses">
								Online Courses
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								href="/about">
								About
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								href="/contact">
								Contact
							</Link>
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
						<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									
								}}
								href="/ba-zi">
								Ba Zi
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									
								}}
								href="/classes-instruction">
								Classes & Instruction
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									
								}}
								href="/online-courses">
								Online Courses
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									
								}}
								href="/about">
								About
							</Link>
							<Link
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									
								}}
								href="/contact">
								Contact
							</Link>
						</Stack>
					</Box>
				) : null}
			</Box>
		</nav>
	);
}
