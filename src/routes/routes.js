import {
    MainPage,
    CategoryPage,
    CoursePage,
    ShopPage,
    MainForm,
    AccountPage,
    NotFound,
    ArticlePage,
} from '../pages';
export const routes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/category-info/:categoryName',
        element: <CategoryPage />,
    },
    {
        path: '/course-info/:courseName',
        element: <CoursePage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
    {
        path: '/login-register',
        element: <MainForm />,
    },
    {
        path: '/account',
        element: <AccountPage />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/articles/:articleName',
        element: <ArticlePage />,
    },
];
