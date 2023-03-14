const CourseBox = () => {
    return (
        <>
            <div className='w-full rounded-xl bg-secondaryColor'>
                <img
                    src='/images/sabz-next.png'
                    alt=''
                    className='rounded-t-xl w-full'
                />
                <div className='px-5 pb-5'>
                    <p className='text-white text-center my-6'>
                        آموزش Next.js بصورت پروژه محور
                    </p>
                    <div className='flex items- justify-between'>
                        <p className='text-white'>850000 تومان</p>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-mainYellow font-semibold'>
                                1020
                            </p>
                            <p className='text-white'>دانشجو</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseBox;
