import { MainPage, CategoryPage } from '../pages';
export const routes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/categories/:categoryName',
        element: <CategoryPage />,
    },
];
