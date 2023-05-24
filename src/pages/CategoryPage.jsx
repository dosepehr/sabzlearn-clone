import { useParams, Link } from 'react-router-dom';
import { Topbar, Navbar, Footer, Courses, Breadcrumb } from '../components';
import { useContext } from 'react';
import { mainContext } from '../context';
import { Helmet } from 'react-helmet-async';
const CategoryPage = () => {
    const { navbarLinks } = useContext(mainContext);
    const { categoryName } = useParams();
    const category = navbarLinks.filter((data) => data.href === categoryName);
    return (
        <>
            <Helmet>
                <title>دسته بندی ها</title>
            </Helmet>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-primaryColor pt-5'>
                <div className='max-w-[1080px] mx-auto px-12 space-y-3'>
                    <Breadcrumb
                        links={[
                            {
                                id: 1,
                                title: category[0].title,
                                href: category[0].href,
                            },
                        ]}
                    />
                    <div className='w-fit space-y-5 '>
                        {navbarLinks.map(
                            (link, i) =>
                                link.href !== categoryName && (
                                    <Link
                                        key={i}
                                        to={`/categories/${link.href}`}
                                        className='text-mainWhite block'
                                    >
                                        {link.title}
                                    </Link>
                                )
                        )}
                    </div>
                </div>
            </div>
            <Courses />
            <Footer />
        </>
    );
};

export default CategoryPage;
