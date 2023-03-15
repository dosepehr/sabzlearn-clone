import { MainPage, CategoryPage, CoursePage, ShopPage } from '../pages';
export const routes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/categories/:categoryName',
        element: <CategoryPage />,
    },
    {
        path: '/courses/:courseName',
        element: <CoursePage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
];
