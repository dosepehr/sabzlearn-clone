import { useParams, Link } from 'react-router-dom';
import { Topbar, Navbar, Footer, Courses } from '../components';
import { navbarData } from '../constants/navbarData';
const CategoryPage = () => {
    const { categoryName } = useParams();
    return (
        <>
            {/* add pagination */}
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-primaryColor pt-5'>
                <div className='max-w-[1080px] mx-auto px-12 space-y-3'>
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
            <Courses />
            <Footer />
        </>
    );
};

export default CategoryPage;
