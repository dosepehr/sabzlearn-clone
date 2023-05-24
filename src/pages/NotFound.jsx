import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components';
const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404</title>
            </Helmet>

            <PageWrapper>
                <div className='flex items-center justify-center bg-primaryColor py-20 flex-col space-y-4'>
                    <p className='text-mainWhite text-9xl'>404</p>
                    <p className='text-mainWhite text-3xl'>
                        همچین صفحه ای یافت نشد
                    </p>
                </div>
            </PageWrapper>
        </>
    );
};

export default NotFound;
