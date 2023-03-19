import { useContext } from 'react';
import { mainContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../validation/userSchema';
import {toast} from './'
const LoginForm = () => {
    const { currentForm } = useContext(mainContext);
    const loginUser = (values) => {
        console.log(values);
        toast.fire({
            icon: 'success',
            title: 'ثبت نام کردید',
        });
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
                    loginUser(values);
                }}
            >
                <Form
                    className={`flex flex-col space-y-4 absolute w-[19rem]
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
