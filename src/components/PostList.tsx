import PostCard from "./PostCard";
import {Post} from '@/lib/types';
import '@/styles/components/postList.scss';

export default function PostsList(props: { posts: Post[] }) {
    const { posts } = props;
    return (
      <div className="post-list">
        {
          posts.map((post) => {return <PostCard post={post} key={post.id}></PostCard>})
        }
      </div>
    );
} 
