export interface Search {
    query: string
    limit: number
    rating: string
}

export interface Giphy {
    data: {
        images: { fixed_height: { url: string } };
    }[];
}