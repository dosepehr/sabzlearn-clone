import { BiSearchAlt } from 'react-icons/bi';
const Landing = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='sm:text-2xl mt-10 mb-5 text-center text-md text-white  w-full'>
                با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت
                کن
            </p>
            <div className='relative w-1/2 min-w-[300px] '>
                    <input
                        placeholder='جستجو...'
                        type='text'
                        className='bg-[#ffffff33] text-white p-4 rounded-full w-full placeholder:text-white placeholder:text-2xl'
                    />
                    <button
                        type='submit'
                        className='absolute left-5 bottom-[0.5rem] text-white text-4xl '
                    >
                        <BiSearchAlt />
                    </button>
            </div>
        </div>
    );
};

export default Landing;
