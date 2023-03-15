import { Topbar, Navbar, Footer, Breadcrumb, Courses } from '../components';
const ShopPage = () => {
    return (
        <>
            {/* TODO add pagiantion */}
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
                                title: 'فروشگاه',
                                href: 'shop',
                            },
                        ]}
                    />
                </div>
            </div>
            <Courses />
            <Footer />
        </>
    );
};

export default ShopPage;
