import { Link } from 'react-router-dom';

const Breadcrumb = ({ links }) => {
    return (
        <div className='space-x-2 text-mainWhite '>
            <Link to='/'>خانه / </Link>
            {links.map((link, index) => (
                <Link to={`/${link.href}`} key={index} className='font-bold'>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default Breadcrumb;
