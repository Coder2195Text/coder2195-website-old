export interface IAsset {
    id: string;
    url: string
}

export interface IPost {
    id: string;
    title: string;
    date: string;
    excerpt: string | null;
    coverImage: IAsset | null;
    content: string
}