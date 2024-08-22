import { useParams } from 'react-router-dom';
import { Article } from '../components/article';
import { Loader } from '../components/loader';
import { useArticle } from '../hooks/useArticle.hooks';

export default function CardPage() {
    const { id } = useParams();
    const { selectedArticle, isLoading } = useArticle(id ? +id : undefined);

    if (isLoading) return <Loader />;
    if (!selectedArticle) return <h2>Error</h2>;

    return (
        <main className='h-screen flex justify-center items-center'>
            <Article article={selectedArticle} isShortVariant={false} />
        </main>
    );
}
