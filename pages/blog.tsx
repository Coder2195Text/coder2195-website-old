import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import BlogPreview from '../components/blog/blogPreview/BlogPreview';
import Title from '../components/global/title/Title';
import { fetchBlogPreviews } from '../graphql/queries';
import { IPost } from '../graphql/types';


interface Props {
    posts: Array<IPost>
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
    console.log(posts)
    return <div>
        <Title>Blog Posts</Title>
        <BlogPreview posts={posts}/>
    </div>
}

export default Blog;