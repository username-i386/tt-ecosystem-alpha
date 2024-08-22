import { useAppDispatch } from '../store/hooks';
import { toggleLikeArticle } from '../store/slices/articles-slice';

export const LikeButton = ({
    arrticleId,
    isFavorite,
}: {
    arrticleId: number;
    isFavorite: boolean;
}) => {
    const dispatch = useAppDispatch();
    const toggleLike = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(toggleLikeArticle(arrticleId));
    };

    return (
        <button
            onClick={e => toggleLike(e)}
            className='bg-gray-300 rounded-2xl w-full flex justify-center items-center duration-200 hover:bg-gray-400'
        >
            <svg width='24px' height='24px' viewBox='0 0 24 24'>
                <path
                    d='M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
                    fill={isFavorite ? 'red' : '#1C274C'}
                />
            </svg>
        </button>
    );
};
