import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ArticleType } from '../../types/articles.types';

export type ArticleExtendedType = ArticleType & { isFavorite: boolean };

export type ArticleState = {
    articles: ArticleExtendedType[];
};

const initialState: ArticleState = {
    articles: [],
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (
            state: ArticleState,
            action: PayloadAction<ArticleType[]>,
        ) => {
            state.articles = action.payload.map(article => {
                return {
                    ...article,
                    isFavorite: false,
                };
            });
        },
        removeArticle: (state: ArticleState, action: PayloadAction<number>) => {
            state.articles = state.articles.filter(
                ({ id }) => id !== action.payload,
            );
        },
        toggleLikeArticle: (
            state: ArticleState,
            action: PayloadAction<number>,
        ) => {
            state.articles = state.articles.map(article => {
                if (article.id === action.payload) {
                    return {
                        ...article,
                        isFavorite: !article.isFavorite,
                    };
                }

                return article;
            });
        },
    },
});

export const { setArticles, removeArticle, toggleLikeArticle } =
    articlesSlice.actions;

export default articlesSlice.reducer;
