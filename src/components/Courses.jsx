import { CourseBox, Articles } from './index';
const Courses = () => {
    return (
        <>
            <div className=' bg-primaryColor'>
                <div className='max-w-[1080px] mx-auto p-12'>
                    <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {[...new Array(20)].map((item) => (
                            <CourseBox />
                        ))}
                    </div>
                    <Articles />
                </div>
            </div>
        </>
    );
};

export default Courses;
