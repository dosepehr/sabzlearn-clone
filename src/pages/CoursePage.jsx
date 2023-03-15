import { Topbar, Navbar, Breadcrumb } from '../components';

const CoursePage = () => {
    return (
        <div>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
                <div className='flex justify-between '>
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
            </div>
        </div>
    );
};

export default CoursePage;
