import { GraphQLClient } from 'graphql-request';
import { FC } from 'react';
import { fetchBlogPreviews } from '../graphql/queries';
import { IPost } from '../graphql/types';


interface Props {
    posts: Array<IPost>
}

export async function getServerSideProps() {

    const { posts } = await fetchBlogPreviews();
    return {
        props: {
            posts
        },
    };
}

const Blog: FC<Props> = ({posts}) => {
    return <>{JSON.stringify(posts)}</>
}

export default Blog;