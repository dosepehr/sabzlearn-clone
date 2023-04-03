import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../validation/userSchema';
import { toast } from './';
import { loginUser } from '../services';
import ReCAPTCHA from 'react-google-recaptcha';
const LoginForm = () => {
    const navigate = useNavigate();
    const { currentForm, login, recaptchaConfirmed, isRecaptchaConfirmed } =
        useContext(mainContext);
    const handleLoginUser = async (values) => {
        try {
            if (recaptchaConfirmed) {
                const userInfo = {
                    identifier: values.username,
                    password: values.password,
                };
                const { data } = await loginUser(userInfo);
                toast.fire({
                    icon: 'success',
                    title: 'خوش آمدید :))',
                });
                login(values.username, data.accessToken);
                navigate('/');
            }
        } catch (err) {
            toast.fire({
                icon: 'error',
                title: 'کاربری با این نام یافت نشد',
            });
        }
    };
    const handleRecaptcha = () => {
        isRecaptchaConfirmed(true);
    };
    return (
        <>
            {/* if user requested for login form ,it will slide from left */}
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    handleLoginUser(values);
                }}
            >
                <Form
                    className={`flex flex-col space-y-2 absolute w-[19rem]
                duration-300
                ${currentForm === 'login' ? 'right-9' : 'right-full'}
                `}
                >
                    <Field
                        name='username'
                        type='text'
                        placeholder='نام کاربری'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='username' />
                    </span>
                    <Field
                        name='password'
                        type='password'
                        placeholder='رمز ورود'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='password' />
                    </span>
                    <ReCAPTCHA
                        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                        onChange={handleRecaptcha}
                    />
                    <button
                        type='submit'
                        className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#00f739] to-[#50cc00]'
                    >
                        ورود
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
