import Link from 'next/link'
import {Post} from '@/lib/types'
import Image from 'next/image';
import '@/styles/pages/postPage.scss';

export default async function BlogPost({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    let post: Post;

    try {
        const res = await fetch(`http://localhost:3001/blogPosts?id=${id}`);
        if (!res.ok) {
            throw new Error('Error')
        }
        const resJson = await res.json();
        post = resJson[0];
    } catch {
        throw new Error('Error')
    }

    return (
      <div className='page-content'>
        
        <div className='post'>
          <div className="post__title page-content--thin">
            <Link className='page-content--thin'href="/">
              <span>All Posts</span>
            </Link>
            <h1>{post.title}</h1>
            <div className='info-section'>
              <div>
                <span className='info-section__badge'>2 min read</span>
                <span className='info-section__badge'>8 views</span>
              </div>
              <span>12/3/2024</span> 
            </div>  
          </div>

          <div className="post__media">
            <Image src={post.imageLg} alt='post cover image' sizes="100vw" width='1300' height='600' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </div>
          <div className="post__content page-content--thin">
            <h2 className='post__content-subtitle'>Subtitle</h2>
            <p>{post.body}</p>
            <h3>The following text is added in the BlogPost component for ui purposes to each post</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in enim ac ligula posuere semper id sed neque. Donec fermentum blandit mattis. Etiam egestas dapibus mauris, et vestibulum leo. Mauris risus erat, ultrices eget eleifend a, laoreet ac quam. Nullam eros turpis, ultrices vel elit ac, dignissim lacinia quam. Integer diam sapien, consectetur eu elementum a, viverra vel dui. Fusce convallis, ex eget malesuada ornare, odio orci maximus ante, ac tempus diam nibh vel lacus. Nunc nec velit finibus ligula mattis molestie laoreet id nunc. Morbi volutpat urna metus, quis rhoncus arcu bibendum quis. In at elit nibh. Mauris iaculis consequat dictum. Aliquam sit amet turpis vitae nisi imperdiet vehicula a sit amet nisl. Vivamus consequat metus sed enim posuere sodales.</p>
            <p>Morbi laoreet, sapien eget tincidunt dapibus, massa elit sodales ante, sed semper mauris ligula id risus. Suspendisse rutrum dui ac efficitur rhoncus. Vestibulum sit amet diam sed erat sagittis ornare et nec ante. Aenean pharetra tincidunt neque vel auctor. Nunc risus nulla, bibendum nec augue eget, dictum dictum sapien. Cras accumsan aliquam aliquam. Duis et vehicula nisl. Aenean at felis non tortor hendrerit tempus. Mauris dignissim rhoncus est scelerisque aliquet.</p>
            <p>Morbi mattis ex vel purus congue, ac feugiat quam eleifend. In id quam nisi. Ut id sollicitudin metus, sit amet vehicula urna. Duis eget lacus sagittis, laoreet ligula eget, bibendum leo. Donec euismod erat vitae malesuada pharetra. Aenean consectetur fermentum dolor, vitae sagittis ex auctor vitae. Donec fermentum hendrerit iaculis. Phasellus pulvinar, nulla a malesuada tempor, tortor sapien elementum mauris, at consectetur magna mi sed purus. In non odio nibh. Mauris a scelerisque nunc. Suspendisse fermentum enim eu vehicula finibus. Morbi auctor mattis felis quis venenatis. Vestibulum ut mauris mi. Curabitur vitae metus tincidunt, rutrum felis non, pharetra libero. Vestibulum justo enim, condimentum nec posuere elementum, tempus vel massa.</p>
          </div>
        </div>
      </div>
    );
}
  