import { useEffect, useContext } from 'react';
import { Topbar, Navbar, Footer } from '../components';
import { useParams } from 'react-router-dom';
import { getArticle, getCourse } from '../services';
import { mainContext } from '../context';
const ArticlePage = () => {
    const { setArticle, article } = useContext(mainContext);
    const { articleName } = useParams();
    useEffect(() => {
        const fetchCourseData = async () => {
            const { data } = await getArticle(
                articleName,
                localStorage.getItem('userToken')
            );
            setArticle(data);
            console.log(data);
        };
        fetchCourseData();
    }, [articleName, setArticle]);
    return (
        <>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-primaryColor pt-5'>
                <div className='max-w-[1080px] mx-auto px-12 space-y-3'>
                    {article ? (
                        <div className='text-topbatLinks '>
                            <h2 className='text-3xl font-bold'>
                                {article.title}
                            </h2>
                            <p className='mt-6' >{article.description}</p>
                            <div></div>
                        </div>
                    ) : (
                        <div className='bg-red-500 text-white p-5 rounded-lg text-center max-w-xs mx-auto'>
                            <p>مقاله مدنظر شما پیدا نشد</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticlePage;
