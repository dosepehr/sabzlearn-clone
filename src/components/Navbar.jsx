import { FaShoppingBasket } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { mainContext } from '../context';
import { useContext } from 'react';
import { Menu } from './index';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { menu, setMenu, userInfo, isLoggedIn, navbarLinks } =
        useContext(mainContext);
    const menuHandler = () => {
        setMenu((prev) => !prev);
    };
    return (
        <>
            <div className='border-b-[1px] border-b-white border-opacity-30'>
                <div className='max-w-[1080px] items-center justify-between mx-auto p-2 flex'>
                    <div
                        className='hamburger-menu min-[930px]:hidden'
                        onClick={menuHandler}
                    >
                        <div className={`${menu ? 'bar active' : 'bar'}`}></div>
                    </div>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img
                                src='/images/logo.png'
                                alt=''
                                className='h-10 ml-9'
                            />
                        </Link>
                        <div className='hidden min-[930px]:flex'>
                            {navbarLinks.map((link, index) => (
                                <div className='group' key={link._id}>
                                    <div className='relative'>
                                        <Link
                                            to={`/category-info/${link.href}`}
                                            className='mx-2 text-mainWhite  peer'
                                        >
                                            {link.title}
                                        </Link>
                                        {link.submenus.length > 0 && (
                                            <div className='absolute bg-[#15151c] p-4 rounded-xl w-max flex-col space-y-4 hidden group-hover:flex group-hover:z-50 duration-300 '>
                                                {link.submenus.map(
                                                    (item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={item.href}
                                                            className='text-mainWhite'
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <Link to={`/shop/`} className='mx-2 text-mainWhite'>
                                فروشگاه
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className='flex items-center p-2 bg-blue-500 text-white rounded-md'>
                            {Object.keys(userInfo).length > 0 && isLoggedIn ? (
                                <Link to='/account'>
                                    <p className='ml-2 hidden min-[930px]:block'>
                                        {userInfo.username}
                                    </p>
                                </Link>
                            ) : (
                                <Link to='/login-register'>
                                    <p className='ml-2 hidden min-[930px]:block'>
                                        ورود / ثبت نام
                                    </p>
                                </Link>
                            )}
                            <BsFillPersonFill />
                        </div>
                        <div className='mr-2 text-white text-xl'>
                            <FaShoppingBasket />
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    );
};

export default Navbar;
