import { CourseBox } from './index';
import { useContext } from 'react';
import { mainContext } from '../context';
const Courses = () => {
    const { courses } = useContext(mainContext);
    console.log(courses)
    return (
        <>
            <div className=' bg-primaryColor'>
                <div className='max-w-[1080px] mx-auto p-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {courses.length > 0 &&
                            courses.map((course) => (
                                <CourseBox {...course} key={course._id} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
