import { Topbar, Navbar, Footer } from '../components';
const NotFound = () => {
    return (
        <>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>

            <div className='flex items-center justify-center bg-primaryColor py-20 flex-col space-y-4'>
                <p className='text-topbatLinks text-9xl'>404</p>
                <p className='text-topbatLinks text-3xl'>همچین صفحه ای یافت نشد</p>
            </div>

            <Footer />
        </>
    );
};

export default NotFound;
