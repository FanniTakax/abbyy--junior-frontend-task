import PostCard from "./PostCard";
import {Post} from '@/lib/types'

export default function PostsList(props: { posts: Post[] }) {
    const { posts } = props;
    return (
      <div>
        {
            posts.map((post) => {return <PostCard post={post} key={post.id}></PostCard>})
        }
      </div>
    );
} 
