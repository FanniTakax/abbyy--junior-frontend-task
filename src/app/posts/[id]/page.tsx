import { Post } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, multiplyText } from '@/lib/utils';
import '@/styles/pages/postPage.scss';

export default async function BlogPost({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    let post: Post;
    let dateFormatted = '';
    let bodyMultiplied = '';

    try {
        const res = await fetch(`http://localhost:3001/blogPosts?id=${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const resJson = await res.json();
        post = resJson[0];
        dateFormatted = formatDate(post.date);
        // post body is multiplied for UI purposes, to show some longer text
        bodyMultiplied = multiplyText(post.body);
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }

    return (
        <div className="page-content">
            <article className="post">
                <div className="post__title page-content--thin">
                    <Link className="page-content--thin" href="/">
                        <span>All Posts</span>
                    </Link>
                    <h1>{post.title}</h1>
                    <div className="info-section">
                        <div>
                            <span className="info-section__badge">
                                {post.readingTime} min read
                            </span>
                            <span className="info-section__badge">
                                {post.views} views
                            </span>
                        </div>
                        <span>{dateFormatted}</span>
                    </div>
                </div>
                <div className="post__media">
                    <Image
                        src={post.imageLg}
                        alt="Blog post's cover image"
                        sizes="100vw"
                        width="1300"
                        height="600"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div className="post__content page-content--thin">
                    <h2 className="post__content-subtitle">Subtitle</h2>
                    <p>{post.body}</p>
                    <h3>The following text is generated from the post body</h3>
                    <p>{bodyMultiplied}</p>
                </div>
            </article>
        </div>
    );
}
