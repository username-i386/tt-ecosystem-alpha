import { useEffect } from 'react';
import { useGetAllArticlesQuery } from '../store/slices/space-api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setArticles } from '../store/slices/articles-slice';

export const useArticles = (isFavoriteArticles: boolean) => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(state => state.articlesReducer.articles);
    const { data, isLoading } = useGetAllArticlesQuery(undefined, {
        skip: articles.length > 0,
    });

    useEffect(() => {
        if (data) {
            dispatch(setArticles(data.results));
        }
    }, [data]);

    if (isFavoriteArticles) {
        const favoriteArticles = articles.filter(
            ({ isFavorite }) => isFavorite === true,
        );
        return { articles: favoriteArticles, isLoading };
    }

    return { articles, isLoading };
};
