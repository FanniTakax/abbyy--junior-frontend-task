import Link from 'next/link'

export default async function BlogPost({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    console.log(id)

    return (
      <div>
        <Link href="/">Back</Link>
        <p>Blog post {id}</p>
      </div>
    );
}
  