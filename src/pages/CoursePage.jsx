import { Image, Shimmer } from 'react-shimmer';
import {
    Topbar,
    Navbar,
    Breadcrumb,
    Accordion,
    Footer,
    Loader,
} from '../components';
import { getCourse } from '../services';
import { useContext, useEffect } from 'react';
import { mainContext } from '../context';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { courseName } = useParams();
    // TODO get token from state
    const { course, setCourse, token, loading, setLoading } =
        useContext(mainContext);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setLoading(true);
                const { data } = await getCourse(
                    courseName,
                    localStorage.getItem('userToken')
                );
                setCourse(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCourseData();
    }, []);

    const sections = [
        {
            title: 'فصل اول',
            sessions: [
                { id: '1', title: 'جلسه اول فصل اول', time: '10:12' },
                { id: '2', title: 'جلسه دوم فصل اول', time: '20:43' },
            ],
        },
        {
            title: 'فصل دوم',
            sessions: [
                { id: '1', title: 'جلسه اول فصل دوم', time: '15:56' },
                { id: '2', title: 'جلسه دوم فصل دوم', time: '22:45' },
            ],
        },
    ];

    return (
        <>
            <div className='bg-secondaryColor pb-10'>
                <Topbar />
                <Navbar />
            </div>
            {!loading ? (
                <>
                    {Object.keys(course).length > 0 && (
                        <div className='bg-secondaryColor'>
                            <div className='max-w-[1080px] mx-auto'>
                                <div className='flex justify-between max-[930px]:flex-col max-[930px]:text-center py-10'>
                                    <p className='text-mainGreen'>
                                        {course.name}
                                    </p>
                                    <Breadcrumb
                                        links={[
                                            {
                                                id: 1,
                                                title: 'آموزش برنامه نویسی فرانت اند',
                                                href: 'categories/front-end',
                                            },
                                        ]}
                                    />
                                </div>
                                <div className='flex flex-col md:flex-row px-10 md:pr-0 min[930px]:py-0'>
                                    <div className='w-full md:w-8/12 ml-20'>
                                        <div className='h-full w-full'>
                                            <Image
                                                src='/images/sabz-next.png'
                                                fallback={
                                                    <Shimmer
                                                        width={200}
                                                        height={200}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full md:w-4/12'>
                                        <p className='text-topbatLinks text-center'>
                                            {course.price
                                                ? `${course.price} تومان`
                                                : 'رایگان'}
                                        </p>
                                        <p className='bg-[#ffffff45] text-white py-2 px-1 rounded-md my-5'>
                                            پس از خرید، بلافاصله به محتوای دوره
                                            دسترسی خواهید داشت و میتوانید دوره
                                            را مشاهده و یا دانلود کنید.
                                        </p>
                                        <div className='text-topbatLinks'>
                                            <p>
                                                پــروژه مــحور بودن دوره هــــا
                                            </p>
                                            <p>پشتیبـــانی دائــــمی محصولات</p>
                                            <p>تضمین کیــفیت کلیـه محصولات</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-10'>
                                    <div className='bg-primaryColor border-r-topbatLinks border-dashed border-r-2'>
                                        <div className='text-topbatLinks px-3 py-4'>
                                            <p className='text-sm'>
                                                مدرس : {course.creator.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='bg-primaryColor border-r-topbatLinks border-dashed border-r-2'>
                                        <div className='text-topbatLinks px-3 py-4'>
                                            <p className='text-sm'>
                                                وضعیت دوره :
                                                {course.isComplete
                                                    ? 'تکمیل شده'
                                                    : 'درحال برگزاری'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='bg-primaryColor border-r-topbatLinks border-dashed border-r-2'>
                                        <div className='text-topbatLinks px-3 py-4'>
                                            <p className='text-sm'>
                                                تعداد درس :{' '}
                                                {course.sessions.length}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='bg-primaryColor border-r-topbatLinks border-dashed border-r-2'>
                                        <div className='text-topbatLinks px-3 py-4'>
                                            <p className='text-sm'>
                                                دانشجو : 1020
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-topbatLinks'>
                                    {course.description}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='bg-primaryColor'>
                        <div className='max-w-[1080px] mx-auto py-10'>
                            <Accordion sections={sections} />
                        </div>
                    </div>
                </>
            ) : (
                <Loader />
            )}

            <Footer />
        </>
    );
};

export default CoursePage;
