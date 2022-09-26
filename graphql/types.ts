export interface IAsset {
    id: string;
    url: string
}

export interface IRichText {
    markdown: String;
}

export interface IPost {
    id: string;
    title: string;
    date: string;
    excerpt: string | null;
    coverImage: IAsset | null;
    content: IRichText
    slug: string;
}
