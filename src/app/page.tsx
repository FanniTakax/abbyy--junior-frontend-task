import PostsList from "@/components/PostList";
import { Post } from '@/lib/types'

export default async function BlogList() {
    let posts: Post[] | undefined;
    try {
      const res = await fetch('http://localhost:3001/blogPosts');
      if (!res.ok) {
        throw new Error('Error')
      }
      posts = await res.json();
    } catch {
      throw new Error('Error')
    }


  return (
    <div className='page-content'>
      {
        posts && <PostsList posts={posts}></PostsList>
      }
    </div>
  );
}
