import { Topbar, Navbar, Breadcrumb } from '../components';

const CoursePage = () => {
    return (
        <div className='bg-secondaryColor'>
            <Topbar />
            <Navbar />
            <div className='max-w-[1080px] mx-auto'>
                <div className='flex justify-between max-[930px]:flex-col max-[930px]:text-center py-10'>
                    <p className='text-mainGreen'>
                        آموزش Next.js بصورت پروژه محور
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
                <div className='flex'>
                    <div className='w-8/12 ml-20'>
                        <img
                            src='/images/sabz-next.png'
                            alt=''
                            className='w-full'
                        />
                    </div>
                    <div className='w-4/12'>
                        <p className='text-topbatLinks text-center'>
                            850,000 تومان
                        </p>
                        <p className='bg-topbatLinks text-white py-2 px-1 rounded-md my-5'>
                            پس از خرید، بلافاصله به محتوای دوره دسترسی خواهید
                            داشت و میتوانید دوره را مشاهده و یا دانلود کنید.
                        </p>
                        <div className='text-topbatLinks'>
                            <p>پــروژه مــحور بودن دوره هــــا</p>
                            <p>پشتیبـــانی دائــــمی محصولات</p>
                            <p>تضمین کیــفیت کلیـه محصولات</p>
                        </div>
                    </div>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    );
};

export default CoursePage;
