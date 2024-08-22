export interface ArticleResponseType {
    count: number;
    next: string | null;
    previous: string | null;
    results: ArticleType[];
}

export type ArticleType = {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: LaunchTypes[];
    events: any[];
};

export type LaunchTypes = {
    launch_id: string;
    provider: string;
};
