import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import '@/styles/components/postCard.scss';

export default function PostCard(props: { post: Post }) {
    const { post } = props;
    const dateFormatted = formatDate(post.date);

    return (
        <article className="card">
            <div className="card__media">
                <Image
                    src={post.imageSm}
                    alt="Blog post's cover image"
                    sizes="100vw"
                    width="400"
                    height="300"
                    style={{
                        objectFit: 'cover',
                        width: 'auto',
                        height: '100%',
                    }}
                />
            </div>
            <div className="card__content">
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
                <h2 className="card__content-title">{post.title}</h2>
                <p className="card__content-body">{post.body}</p>
            </div>
            <div className="card__button">
                <Link href={`/posts/${post.id}`}>Read More</Link>
            </div>
        </article>
    );
}
