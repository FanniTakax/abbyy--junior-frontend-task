import PostsList from "@/components/PostList";
import { Post, PostModified } from '@/lib/types'

export default async function BlogList() {
  let posts: PostModified[] | [] = []
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Error')
    }
    const resJson = await res.json();
    posts = resJson.map((post: Post) => {
      const imgId = Math.floor(Math.random() * 59)
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        date: new Date(),
        views: Math.floor(Math.random() * 10),
        readingTime: 2,
        imageLg: `https://picsum.photos/id/${imgId}/1300/600`,
        imageSm: `https://picsum.photos/id/${imgId}/600/450`,
      }
    })
    console.log(posts)
  } catch {
    throw new Error('Error')
  }


  return (
    <div className='page-content'>
      <h2>My Blog Posts</h2>
      <PostsList posts={posts}></PostsList>
    </div>
  );
}
