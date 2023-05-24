import Slider from 'react-slick';
import { useContext } from 'react';
import { mainContext } from '../context';
import { Link } from 'react-router-dom';
const ArticlesSlider = () => {
    const { articles } = useContext(mainContext);

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
                <p className='text-mainWhite text-center text-lg mb-10 title'>
                    آخرین مقالات سایت
                </p>
                <Slider {...settings}>
                    {articles.map((article) => (
                        <Link to={`articles/${article.shortName}`}>
                            <div className='px-1' key={article._id}>
                                <div className='flex flex-col items-center justify-center'>
                                    <img
                                        src='/images/python.jpg'
                                        alt=''
                                        className='rounded-md'
                                    />
                                    <div className='text-center space-y-2 mt-2 '>
                                        <p className='text-white text-base'>
                                            {article.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ArticlesSlider;
