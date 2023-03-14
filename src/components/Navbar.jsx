import { navbarData } from '../constants/navbarData';
import { FaShoppingBasket } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
const Navbar = () => {
    return (
        <div className='items-center justify-between container mx-auto 2xl:px-40 py-2 flex border-b-[1px] border-b-white border-opacity-30 '>
            {/* TODO make ham menu and its button */}
            {/* TODO edit width lg */}
            <p className='lg:hidden'>ham menu button</p>
            <div className='flex items-center'>
                <img src='/images/logo.png' alt='' className='h-10 mx-9' />
                <div className='hidden lg:flex'>
                    {navbarData.map((link) => (
                        <p key={link.id} className='mx-2 text-topbatLinks'>
                            {link.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex items-center '>
                <div className='flex items-center p-2 bg-blue-500 text-white rounded-md'>
                    <p className='ml-2 hidden lg:block'>sepehr</p>
                    <BsFillPersonFill />
                </div>
                <div className='mr-2 text-white text-xl'>
                    <FaShoppingBasket />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
