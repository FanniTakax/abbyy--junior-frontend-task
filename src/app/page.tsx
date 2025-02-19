import PostsList from "@/components/PostsList";
//import {Post} from '@/lib/types'

export default async function BlogList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(res)

  const posts = await res.json();

  return (
    <div>
      <h3>Post List</h3>
      <PostsList posts={posts}></PostsList>
    </div>
  );
}
