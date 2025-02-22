export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type PostModified = {
    id: number,
    title: string,
    body: string,
    date: string,
    views: number,
    readingTime: number,
    imageSm: string,
    imageLg: string,
}