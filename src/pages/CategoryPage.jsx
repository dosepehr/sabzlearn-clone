import { useParams } from 'react-router-dom';
const CategoryPage = () => {
    const { categoryName } = useParams();
    return <div>{categoryName}</div>;
};

export default CategoryPage;
