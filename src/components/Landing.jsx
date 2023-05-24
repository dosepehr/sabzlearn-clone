import { LandingInput } from './';
const Landing = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='sm:text-2xl mt-10 mb-5 text-center text-md text-white  w-full'>
                با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت
                کن
            </p>
            <LandingInput />
        </div>
    );
};

export default Landing;
