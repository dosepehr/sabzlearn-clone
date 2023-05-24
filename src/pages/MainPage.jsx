import { Helmet } from 'react-helmet-async';
import { TopSection, Courses, Footer, ArticlesSlider } from '../components';
const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>سبزلرن | خانه</title>
            </Helmet>
            <TopSection />
            <Courses />
            <ArticlesSlider />
            <Footer />
        </>
    );
};

export default MainPage;
