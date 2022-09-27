export interface IAsset {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface IRichText {
    markdown: string;
}

export interface IPost {
    id: string;
    title: string;
    date: string;
    excerpt: string | null;
    coverImage: IAsset | null;
    content: IRichText
    slug: string;
    previous: IPost | null;
    next: IPost | null
}
