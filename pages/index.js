import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
	Box
} from "@chakra-ui/react";

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import Nav from "../components/Nav";

export default function Home({ story, preview }) {
	story = useStoryblok(story, preview);
	return (
		<div>
			<Head>
				<title>{story ? story.name : ""}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Nav />
			<Box py="6" px={{base:6, md:16}} maxW="4xl">

				{/* <header>
					<h1>{story ? story.name : ""}</h1>
				</header> */}

				<main className={styles.container}>
					{story
						? story.content.body.map((blok) => (
								<DynamicComponent blok={blok} key={blok._uid} />
							))
						: null}
				</main>
			</Box>
		</div>
	);
}

export async function getServerSideProps(context) {
	// get the query object
	const insideStoryblok = context.query._storyblok;
	const shouldLoadDraft = context.preview || insideStoryblok;
	let slug = "home";
	let sbParams = {
		version: "published", // or 'draft'
	};

	if (shouldLoadDraft) {
		sbParams.version = "draft";
		sbParams.cv = Date.now();
	}

	let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			preview: shouldLoadDraft || false,
		},
	};
}
