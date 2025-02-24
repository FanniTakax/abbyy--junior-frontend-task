module.exports = async () => {
    let posts = [];
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error('Error');
        }
        const resJson = await res.json();
        posts = resJson.map((post) => {
            const imgId = Math.floor(Math.random() * 59);
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                date: new Date(),
                views: 0,
                readingTime: 2,
                imageLg: `https://picsum.photos/id/${imgId}/1300/600`,
                imageSm: `https://picsum.photos/id/${imgId}/600/450`,
            };
        });
        return { blogPosts: posts };
    } catch {
        throw new Error('Error');
    }
};
