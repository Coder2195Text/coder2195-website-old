import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import ItemPreview from '../components/itemPreview/ItemPreview';
import Link from '../components/link/Link';
import { fetchProjectPreviews } from '../graphql/queries';
import { IProject } from '../graphql/types';


interface Props {
    projects: Array<IProject>
}

export const getStaticProps: GetStaticProps = async () => {

    const projects = await fetchProjectPreviews();
    return {
        props: {
            projects
        },
        revalidate: 10
    };
}

const Blog: FC<Props> = ({ projects }) => {
    const title = "Coder2195 - Projects"
    const description = "Come check out some of Coder2195's projects!"
    return <div>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description
            }}
        />
        <h1 id='title'>Projects</h1>
        {projects.map((p) => { return <ItemPreview key={p.slug} href={`/projects/${p.slug}`} title={p.title} excerpt={p.excerpt} /> })}
        <Link href="/">Return Home</Link>
    </div>
}

export default Blog;