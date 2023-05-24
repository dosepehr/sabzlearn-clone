import { CourseBox, NoCourseFounded, Loader } from './';
import { useContext, useEffect, useState } from 'react';
import { mainContext } from '../context';
const Courses = () => {
    const { courses, searchQuery, loading } = useContext(mainContext);
    const [filteredCourses, setFilteredCourses] = useState(courses);
    useEffect(() => {
        setFilteredCourses(
            courses.filter((course) =>
                course.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, courses]);
    return (
        <>
            {!loading ? (
                <div className=' bg-primaryColor'>
                    <div className='max-w-[1080px] mx-auto p-12'>
                        {filteredCourses.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {filteredCourses.map((course) => (
                                    <CourseBox {...course} key={course._id} />
                                ))}
                            </div>
                        ) : (
                            <NoCourseFounded />
                        )}
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Courses;
