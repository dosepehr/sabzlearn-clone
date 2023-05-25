const NoItemFounded = ({ message }) => {
    return (
        <div className='bg-red-500 text-white p-5 rounded-lg text-center max-w-xs mx-auto'>
            <p>{message}</p>
        </div>
    );
};

export default NoItemFounded;
