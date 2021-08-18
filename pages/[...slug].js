import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import Nav from "../components/Nav";
import Head from "next/head";
import { Box, Container, Heading } from "@chakra-ui/react"

import Storyblok, { useStoryblok } from "../lib/storyblok";

export default function Page({ story, preview }) {
	const enableBridge = true; // load the storyblok bridge everywhere
	// const enableBridge = preview; // enable bridge only in prevew mode
	story = useStoryblok(story, enableBridge);

	return (
		<Box>
			<Head>
				<title>{story ? story.name : "My Site"}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Container m={8}>
			<header>
				<Heading as="h1">{story ? story.name : "My Site"}</Heading>
			</header>

			<DynamicComponent blok={story.content} />
			</Container>
		</Box>
	);
}

export async function getStaticProps({ params, preview = false }) {
	// join the slug array used in Next.js catch-all routes
	let slug = params.slug ? params.slug.join("/") : "home";

	let sbParams = {
		// change to `published` to load the published version
		version: "draft", // or published
	};

	if (preview) {
		// set the version to draft in the preview mode
		sbParams.version = "draft";
		sbParams.cv = Date.now();
	}

	let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : null,
			preview,
		},
		revalidate: 3600, // revalidate every hour
	};
}

export async function getStaticPaths() {
	// get all links from Storyblok
	let { data } = await Storyblok.get("cdn/links/");

	let paths = [];
	// create a routes for every link
	Object.keys(data.links).forEach((linkKey) => {
		// do not create a route for folders or the home (index) page
		if (
			data.links[linkKey].is_folder ||
			data.links[linkKey].slug === "home"
		) {
			return;
		}

		// get array for slug because of catch all
		const slug = data.links[linkKey].slug;
		let splittedSlug = slug.split("/");

		// cretes all the routes
		paths.push({ params: { slug: splittedSlug } });
	});

	return {
		paths: paths,
		fallback: false,
	};
}
