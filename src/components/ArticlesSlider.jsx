import Slider from 'react-slick';

const ArticlesSlider = () => {
    const settings = {
        rtl: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='bg-primaryColor pb-10'>
            <div className='max-w-[1080px] mx-auto px-10'>
                {/* TODO edit buttons style and title  */}
                    <p className='text-topbatLinks text-center text-lg mb-10 title'>
                    آخرین مقالات سایت
                    </p>
                <Slider {...settings}>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                                src='/images/python.jpg'
                                alt=''
                                className='rounded-md'
                            />
                            <div className='text-center space-y-2 mt-2 '>
                                <p className='text-xs text-topbatLinks'>
                                    پایتون
                                </p>
                                <p className='text-white text-base'>
                                    کاربرد پایتون چیست
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ArticlesSlider;
