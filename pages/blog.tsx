import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import BlogPreview from '../components/blog/blogPreview/BlogPreview';
import Link from '../components/global/link/Link';
import Title from '../components/global/title/Title';
import { fetchBlogPreviews } from '../graphql/queries';
import { IBlogPost } from '../graphql/types';


interface Props {
    posts: Array<IBlogPost>
}

export const getStaticProps: GetStaticProps = async() =>{

    const posts = await fetchBlogPreviews();
    return {
        props: {
            posts
        },
        revalidate: 10
    };
}

const Blog: FC<Props> = ({posts}) => {
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
        <Title>Blog Posts</Title>
        <BlogPreview posts={posts}/>
        <Link href="/">Return Home</Link>
    </div>
}

export default Blog;