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
import { NotFound } from '../pages';
import { Helmet } from 'react-helmet-async';

const CoursePage = () => {
    const farsiPrice = new Intl.NumberFormat('fa');
    const { courseName } = useParams();
    const { course, setCourse, loading, setLoading } = useContext(mainContext);
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
    if (Object.keys(course).length) {
        return (
            <>
                <Helmet>
                    <title>{`دوره | ${course.name}`}</title>
                </Helmet>
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
                                                    title: course.categoryID
                                                        .title,
                                                    href: `category-info/${course.categoryID.name}`,
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
                                            <p className='text-mainWhite text-center'>
                                                {course.price
                                                    ? `${farsiPrice.format(
                                                          course.price
                                                      )} تومان`
                                                    : 'رایگان'}
                                            </p>
                                            <p className='bg-[#ffffff45] text-white py-2 px-1 rounded-md my-5'>
                                                پس از خرید، بلافاصله به محتوای
                                                دوره دسترسی خواهید داشت و
                                                میتوانید دوره را مشاهده و یا
                                                دانلود کنید.
                                            </p>
                                            <div className='text-mainWhite'>
                                                <p>
                                                    پــروژه مــحور بودن دوره
                                                    هــــا
                                                </p>
                                                <p>
                                                    پشتیبـــانی دائــــمی
                                                    محصولات
                                                </p>
                                                <p>
                                                    تضمین کیــفیت کلیـه محصولات
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-10'>
                                        <div className='bg-primaryColor border-r-mainWhite border-dashed border-r-2'>
                                            <div className='text-mainWhite px-3 py-4'>
                                                <p className='text-sm'>
                                                    مدرس : {course.creator.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='bg-primaryColor border-r-mainWhite border-dashed border-r-2'>
                                            <div className='text-mainWhite px-3 py-4'>
                                                <p className='text-sm'>
                                                    وضعیت دوره :
                                                    {course.isComplete
                                                        ? 'تکمیل شده'
                                                        : 'درحال برگزاری'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='bg-primaryColor border-r-mainWhite border-dashed border-r-2'>
                                            <div className='text-mainWhite px-3 py-4'>
                                                <p className='text-sm'>
                                                    تعداد درس :{' '}
                                                    {course.sessions.length}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='bg-primaryColor border-r-mainWhite border-dashed border-r-2'>
                                            <div className='text-mainWhite px-3 py-4'>
                                                <p className='text-sm'>
                                                    دانشجو : 1020
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-mainWhite'>
                                        {course.description}
                                    </div>
                                </div>
                            </div>
                        )}
                        {course.sessions > 0 ? (
                            <div className='bg-primaryColor'>
                                <div className='max-w-[1080px] mx-auto py-10'>
                                    <Accordion sections={course.sessions} />
                                </div>
                            </div>
                        ) : (
                            <div className='bg-red-500 text-white p-5 rounded-lg text-center max-w-xs mx-auto'>
                                <p>برای این دوره هنوز جلسه ای منتشر نشده</p>
                            </div>
                        )}
                    </>
                ) : (
                    <Loader />
                )}

                <Footer />
            </>
        );
    } else {
        return <NotFound />;
    }
};

export default CoursePage;
