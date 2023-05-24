import { Footer, Topbar, Navbar } from './';
const PageWrapper = ({ children }) => {
    return (
        <>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            {children}
            <Footer />
        </>
    );
};

export default PageWrapper;
