export const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='p-2 bg-gray-600 rounded-md'>
                <svg
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-loader animate-spin text-white'
                >
                    <path d='M12 2v4' />
                    <path d='m16.2 7.8 2.9-2.9' />
                    <path d='M18 12h4' />
                    <path d='m16.2 16.2 2.9 2.9' />
                    <path d='M12 18v4' />
                    <path d='m4.9 19.1 2.9-2.9' />
                    <path d='M2 12h4' />
                    <path d='m4.9 4.9 2.9 2.9' />
                </svg>
            </div>
        </div>
    );
};
