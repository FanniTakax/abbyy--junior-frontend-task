import PostsList from "@/components/PostList";
// import { Post } from '@/lib/types'

export default async function BlogList() {
    let posts = []
    const res = await fetch('http://localhost:3001/blogPosts');
    posts = await res.json();

  return (
    <div className='page-content'>
      {
        posts.length > 0 ? <PostsList posts={posts}></PostsList> : <p>No posts</p>
      }
    </div>
  );
}
