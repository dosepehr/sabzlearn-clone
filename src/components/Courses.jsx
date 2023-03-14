import { CourseBox } from './index';
const Courses = () => {
    return (
        <>
            <div className=' bg-primaryColor'>
                <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-12 max-w-[1080px] mx-auto'>
                    {[...new Array(20)].map((item) => (
                        <CourseBox />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Courses;
