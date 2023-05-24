import {
    LoginForm,
    RegisterForm,
    FormButtons,
    Footer,
    Navbar,
    Topbar,
} from '../components';

const MainForm = ({ currentForm, setCurrentForm }) => {
    return (
        <>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-secondaryColor text-center py-4 border-y-2 border-y-topbatLinks'>
                <p className='text-topbatLinks text-3xl'>حساب کاربری من</p>
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
            <Footer />
        </>
    );
};

export default MainForm;
