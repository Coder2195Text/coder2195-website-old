import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import ItemPreview from '../components/itemPreview/ItemPreview';
import Link from '../components/link/Link';
import { fetchBlogPreviews } from '../graphql/queries';
import { IBlogPost } from '../graphql/types';


interface Props {
    posts: Array<IBlogPost>
}

export const getStaticProps: GetStaticProps = async () => {

    const posts = await fetchBlogPreviews();
    return {
        props: {
            posts
        },
        revalidate: 10
    };
}

const Blog: FC<Props> = ({ posts }) => {
    const title = "Coder2195 - Blog"
    const description = "Come check out some of Coder2195's blog posts!"
    return <div>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description
            }}
        />
        <h1 id='title'>Blog Posts</h1>
        {posts.map((p) => { return <ItemPreview key={p.slug} href={`/blog/${p.slug}`} title={p.title} excerpt={p.excerpt} /> })}
        <Link href="/">Return Home</Link>
    </div>
}

export default Blog;