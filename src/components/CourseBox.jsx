import { Link } from 'react-router-dom';
import { Image, Shimmer } from 'react-shimmer';
const CourseBox = () => {
    return (
        <>
            <Link to={`/course-info/next`}>
                <div className='w-full rounded-xl bg-secondaryColor overflow-hidden'>
                    <div className='h-full w-full'>
                        <Image
                            src='/images/sabz-next.png'
                            fallback={<Shimmer height={100} width={100} />}
                        />
                    </div>
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
            </Link>
        </>
    );
};

export default CourseBox;
