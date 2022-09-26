import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { fetchBlogPreviews } from '../graphql/queries';
import { IPost } from '../graphql/types';


interface Props {
    posts: Array<IPost>
}

export const getStaticProps: GetStaticProps = async() =>{

    const { posts } = await fetchBlogPreviews();
    return {
        props: {
            posts
        },
        revalidate: 10
    };
}

const Blog: FC<Props> = ({posts}) => {
    return <>{JSON.stringify(posts)}</>
}

export default Blog;