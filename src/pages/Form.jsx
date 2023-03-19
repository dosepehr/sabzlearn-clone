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
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='w-96 h-96 bg-white rounded-md border px-10 overflow-x-hidden relative'>
                <FormButtons
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
                <LoginForm />
                <RegisterForm />
            </div>
            <Footer />
        </>
    );
};

export default Form;
