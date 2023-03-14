const Landing = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='sm:text-2xl mt-10 mb-5 text-center text-md text-white '>
                با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت
                کن
            </p>
            <input
                placeholder='جستجو...'
                type='text'
                className='bg-[#ffffff33] w-1/2 min-w-[300px] text-white p-4 rounded-full placeholder:text-white placeholder:text-2xl'
            />
        </div>
    );
};

export default Landing;
