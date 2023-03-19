import { Link } from 'react-router-dom';

const Breadcrumb = ({ links }) => {
    return (
        <div className='space-x-2 text-topbatLinks '>
            <Link to='/'>خانه / </Link>
            {links.map((link) => (
                <>
                    <Link
                        to={`/${link.href}`}
                        key={link.id}
                        className='font-bold'
                    >
                        {link.title}
                    </Link>
                </>
            ))}
        </div>
    );
};

export default Breadcrumb;