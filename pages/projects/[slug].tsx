import { GetStaticProps } from "next";
import { FC } from "react";
import { fetchProjectSlugs, fetchProject } from "../../graphql/queries";
import { IProject } from "../../graphql/types";
import Footer from "../../components/footer/Footer";
import IconButton from "../../components/iconButton/IconButton";
import Image from "next/image";
import { NextSeo } from "next-seo";
import MDContent from "../../components/MDContent/MDContent";
import icons from "../../utils/icons";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params!.slug;
	if (typeof slug != "string") return { props: {} };
	const project = await fetchProject(slug);

	return {
		props: {
			project
		},
	};
};

export async function getStaticPaths() {
	const slugs = await fetchProjectSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: "blocking",
	};
}

interface Props {
	project: IProject;
}

const ProjectPage: FC<Props> = ({ project }) => {
	const title = `Coder2195 - Project: ${project.title}`;
	const description = project.excerpt ? project.excerpt : "";
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					title,
					description,
				}}
			/>
			<h1 id="title">{project.title}</h1>
            <iframe src={project.embed} style={{
                width: "95vw",
                border: "none",
                maxHeight: "100vh",
                height: "56.25vw"
            }}></iframe>
			<div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
				<MDContent
					content={project.description.markdown}
					style={{ marginBottom: "72pt" }}
				/>
			</div>
			<Footer>
				<IconButton href="/blog" src={icons.HOME} />
			</Footer>
		</>
	);
};

export default ProjectPage;
