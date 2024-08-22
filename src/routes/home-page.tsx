import { useArticles } from '../hooks/useArticles.hooks';
import { useState } from 'react';
import { Article } from '../components/article';
import { Loader } from '../components/loader';

export default function HomePage() {
    const [isFavoriteArticles, setIsFavoriteArticles] = useState(false);
    const { articles, isLoading } = useArticles(isFavoriteArticles);

    if (isLoading) return <Loader />;

    return (
        <main>
            <div className='flex justify-center'>
                <button
                    className='my-3 bg-gray-200 p-2 rounded-2xl hover:bg-gray-400 duration-200'
                    onClick={() => setIsFavoriteArticles(prev => !prev)}
                >
                    Показать
                    {isFavoriteArticles ? ' все ' : ' понравившиеся '}
                    статьи
                </button>
            </div>
            <ul className='flex flex-wrap justify-center gap-2'>
                {articles.map(article => {
                    return (
                        <li key={article.id}>
                            <Article article={article} isShortVariant={true} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
