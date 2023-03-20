import { useContext } from 'react';
import { mainContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../validation/userSchema';
import { toast } from './';
import { registerUser } from '../services';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const navigate = useNavigate();
    const { currentForm, login } = useContext(mainContext);
    const registerUserHandler = async (values) => {
        const { data } = await registerUser({
            ...values,
            confirmPassword: values.password,
        });
        navigate('/');
        login(data.user, data.accessToken);
        toast.fire({
            icon: 'success',
            title: 'شما وارد شدید ',
        });
    };
    return (
        <>
            {/* if user requested for register form ,it will slide from right */}
            <Formik
                initialValues={{
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                    registerUserHandler(values);
                }}
            >
                <Form
                    className={`flex flex-col space-y-2 absolute w-[19rem]
                duration-300
                ${currentForm === 'register' ? 'left-9' : 'left-full'}
                `}
                >
                    <Field
                        name='name'
                        type='text'
                        placeholder='نام و نام خانوادگی'
                        className='p-2 border border-[#777] rounded-3xl'
                    />
                    <span className='text-red-500'>
                        <ErrorMessage name='name' />
                    </span>
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
