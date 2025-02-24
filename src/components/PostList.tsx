import PostCard from './PostCard';
import { Post } from '@/lib/types';
import '@/styles/components/postList.scss';

export default function PostsList(props: { posts: Post[] | undefined }) {
    const { posts } = props;

    return (
        <div className="post-list">
            {posts &&
                posts.map((post) => {
                    return <PostCard post={post} key={post.id}></PostCard>;
                })}
        </div>
    );
}
