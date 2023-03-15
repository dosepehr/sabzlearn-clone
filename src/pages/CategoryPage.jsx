import { useParams, Link } from 'react-router-dom';
import { Topbar, Navbar, Footer, Courses, Breadcrumb } from '../components';
import { navbarData } from '../constants/navbarData';
const CategoryPage = () => {
    const { categoryName } = useParams();
    const category = navbarData.filter((data) => data.href === categoryName);
    return (
        <>
            {/* add pagination */}
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
                        {navbarData.map(
                            (link) =>
                                link.href !== categoryName && (
                                    <Link
                                        to={`/categories/${link.href}`}
                                        className='text-topbatLinks block'
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
