import { Helmet } from 'react-helmet-async';
import { PageWrapper, Breadcrumb, Courses } from '../components';
const ShopPage = () => {
    return (
        <>
            <Helmet>
                <title>سبزلرن | فروشگاه</title>
            </Helmet>
            <PageWrapper>
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
            </PageWrapper>
        </>
    );
};

export default ShopPage;
