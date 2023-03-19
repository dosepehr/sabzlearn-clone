import { useContext } from 'react';
import { mainContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../validation/userSchema';
const RegisterForm = () => {
    const { currentForm } = useContext(mainContext);
    const registerUser = (values) => {
        console.log(values);
    };
    return (
        <>
            {/* if user requested for register form ,it will slide from right */}
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                    registerUser(values);
                }}
            >
                <Form
                    action=''
                    className={`flex flex-col space-y-4 absolute w-[19rem]
                duration-300
                ${currentForm === 'register' ? 'left-9' : 'left-full'}
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
                        name='email'
                        type='email'
                        placeholder='ایمیل'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='email' />
                    </span>
                    <Field
                        name='password'
                        type='password'
                        placeholder='رمز عبور'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='password' />
                    </span>
                    <button
                        type='submit'
                        className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#00f739] to-[#50cc00]'
                    >
                        ثبت نام
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default RegisterForm;
