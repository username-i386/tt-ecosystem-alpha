import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiEndpoints } from '../../constants/api-endpoints.constants';
import type {
    ArticleResponseType,
    ArticleType,
} from '../../types/articles.types';
import { ArticleExtendedType } from './articles-slice';

export const spaceApiSlice = createApi({
    reducerPath: 'spaceApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: apiEndpoints.BASE_URL }),
    endpoints: builder => ({
        getAllArticles: builder.query<ArticleResponseType, void>({
            query: () => ({
                url: apiEndpoints.ARTICLES,
            }),
        }),

        getArticleById: builder.query<ArticleExtendedType, number>({
            query: id => ({
                url: `${apiEndpoints.ARTICLES}/${id}`,
            }),
            transformResponse: (
                response: ArticleType,
            ): ArticleExtendedType => ({
                ...response,
                isFavorite: false,
            }),
        }),
    }),
});

export const { useGetAllArticlesQuery, useGetArticleByIdQuery } = spaceApiSlice;
