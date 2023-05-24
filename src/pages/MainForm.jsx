import { Helmet } from 'react-helmet-async';
import {
    LoginForm,
    RegisterForm,
    FormButtons,
    PageWrapper,
} from '../components';

const MainForm = ({ currentForm, setCurrentForm }) => {
    return (
        <>
            <Helmet>
                <title>ثبت نام کنید یا وارد شوید</title>
            </Helmet>
            <PageWrapper>
                <div className='bg-secondaryColor text-center py-4 border-y-2 border-y-mainWhite'>
                    <p className='text-mainWhite text-3xl'>حساب کاربری من</p>
                </div>
                <div className=' bg-primaryColor'>
                    <div className='flex items-center justify-center'>
                        <div className='w-96 h-[500px] rounded-md overflow-x-hidden relative bg-red'>
                            <FormButtons
                                currentForm={currentForm}
                                setCurrentForm={setCurrentForm}
                            />
                            <LoginForm />
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};

export default MainForm;
