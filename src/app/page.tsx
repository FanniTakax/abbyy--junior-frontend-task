import PostsList from '@/components/PostList';
import { Post } from '@/lib/types';

export default async function BlogList() {
    let posts: Post[] | undefined;

    try {
        const res = await fetch('http://localhost:3001/blogPosts');
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        posts = await res.json();
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }

    return (
        <div className="page-content">
            {posts && <PostsList posts={posts}></PostsList>}
        </div>
    );
}
