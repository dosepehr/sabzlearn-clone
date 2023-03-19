import {
    LoginForm,
    RegisterForm,
    FormButtons,
    Footer,
    Navbar,
    Topbar,
} from '../components';

const Form = ({ currentForm, setCurrentForm }) => {
    return (
        <>
            {/* TODO edit styles */}
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-secondaryColor text-center py-4 border-y-2 border-y-topbatLinks'>
                <p className='text-topbatLinks text-3xl'>حساب کاربری من</p>
            </div>
            <div className='bg-primaryColor flex items-center justify-center'>
                <div className='h-96 w-96 rounded-md overflow-x-hidden relative bg-red'>
                    <FormButtons
                        currentForm={currentForm}
                        setCurrentForm={setCurrentForm}
                    />
                    <LoginForm />
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Form;
