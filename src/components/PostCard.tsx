import Link from 'next/link'
import {Post} from '@/lib/types'

export default function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
      <div>
        <h4>{post.title}</h4>
        <Link href={`/posts/${post.id.toString()}`}>Read More</Link>
      </div>
    );
} 
