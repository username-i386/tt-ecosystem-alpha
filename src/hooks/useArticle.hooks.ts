import { useAppSelector } from '../store/hooks';
import { useGetArticleByIdQuery } from '../store/slices/space-api';

export const useArticle = (articleId: number | undefined = -1) => {
    const articles = useAppSelector(state => state.articlesReducer.articles);
    const selectedArticle = articles.find(({ id }) => id === articleId);

    const { data, isLoading } = useGetArticleByIdQuery(articleId, {
        skip: !!selectedArticle,
    });

    if (selectedArticle) {
        return { selectedArticle, isLoading };
    } else {
        return { selectedArticle: data, isLoading };
    }
};
