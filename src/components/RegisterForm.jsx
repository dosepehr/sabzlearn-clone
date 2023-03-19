import { useContext } from 'react';
import { mainContext } from '../context';
const RegisterForm = () => {
    const { currentForm } = useContext(mainContext);
    return (
        <>
            {/* if user requested for register form ,it will slide from right */}
            <form
                action=''
                className={`flex flex-col space-y-4 absolute w-[19rem]
                duration-300
                ${currentForm === 'register' ? 'right-full' : 'right-9'}
                `}
            >
                <input
                    type='text'
                    placeholder='نام کاربری'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='email'
                    placeholder='ایمیل'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='password'
                    placeholder='رمز عبور'
                    className='p-2 border border-[#777] rounded-3xl'
                />
                <input
                    type='submit'
                    value='ثبت نام'
                    className='text-[#333] text-lg rounded-3xl p-2 bg-gradient-to-r from-[#00f739] to-[#50cc00]'
                />
            </form>
        </>
    );
};

export default RegisterForm;
