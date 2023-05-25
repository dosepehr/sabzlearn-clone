import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../services';
import { mainContext } from '../context';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import { PageWrapper, NoItemFounded } from '../components';
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
            <Helmet>
                <title>{`مقاله | ${article.title}`}</title>
            </Helmet>
            <PageWrapper>
                <div className='bg-primaryColor pt-5'>
                    <div className='max-w-[1080px] mx-auto px-12 space-y-3'>
                        {article ? (
                            <div className='text-mainWhite '>
                                <h2 className='text-3xl font-bold'>
                                    {article.title}
                                </h2>
                                <p className='mt-6'>{article.description}</p>
                                <div
                                    className='my-10 pb-10'
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            article.body
                                        ),
                                    }}
                                ></div>
                            </div>
                        ) : (
                            <NoItemFounded
                                message={'مقاله مدنظر شما پیدا نشد'}
                            />
                        )}
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};

export default ArticlePage;
