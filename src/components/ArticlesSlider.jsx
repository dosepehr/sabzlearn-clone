import Slider from 'react-slick';

const ArticlesSlider = () => {
    const settings = {
        rtl: true,
        dots: true,
        infinite: false,
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
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <div>
            {/* TODO edit buttons style and title  */}
            <p className='text-topbatLinks text-center text-lg my-10 title'>
                آخرین مقالات سایت
            </p>
            <Slider {...settings}>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
                <div className='px-1'>
                    <img
                        src='/images/python.jpg'
                        alt=''
                        className='rounded-md'
                    />
                    <div className='text-center space-y-2 mt-2 '>
                        <p className='text-xs text-topbatLinks'>پایتون</p>
                        <p className='text-white text-base'>
                            کاربرد پایتون چیست
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ArticlesSlider;
