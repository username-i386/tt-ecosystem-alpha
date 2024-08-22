import { Link, useNavigate } from 'react-router-dom';
import { ArticleExtendedType } from '../store/slices/articles-slice';
import { LikeButton } from './like-button';
import { RemoveButton } from './remove-button';
import clsx from 'clsx';

export const Article = ({
    article,
    isShortVariant,
}: {
    article: ArticleExtendedType;
    isShortVariant: boolean;
}) => {
    const nav = useNavigate();
    const redirectToHomePage = (event: React.MouseEvent) => {
        event.preventDefault();
        nav('/');
    };

    return (
        <article className='w-60 bg-gray-200 rounded-2xl'>
            <Link to={`/${article.id}`}>
                <img
                    src={article.image_url}
                    alt={article.title}
                    className='w-64 h-40 object-cover rounded-t-2xl'
                />
                <main
                    className={clsx('px-2', {
                        'line-clamp-3': isShortVariant,
                    })}
                >
                    <h2 className='font-bold'>{article.title}</h2>
                    <p>{article.summary}</p>
                </main>
                <footer className='flex justify-around items-center gap-2 px-2'>
                    {isShortVariant ? (
                        <>
                            <RemoveButton arrticleId={article.id} />
                            <LikeButton
                                arrticleId={article.id}
                                isFavorite={article.isFavorite}
                            />
                        </>
                    ) : (
                        <button
                            className='bg-gray-300 rounded-2xl text-center p-2 my-0 mx-auto font-bold'
                            onClick={e => redirectToHomePage(e)}
                        >
                            Вернуться назад
                        </button>
                    )}
                </footer>
            </Link>
        </article>
    );
};
