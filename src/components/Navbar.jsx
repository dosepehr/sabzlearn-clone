import { navbarData } from '../constants/navbarData';
import { FaShoppingBasket } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
const Navbar = () => {
    return (
        <div className='items-center justify-between container mx-auto 2xl:px-40 py-1 flex'>
            {/* TODO make ham menu and its button */}
            {/* TODO edit width lg */}
            <p className='lg:hidden' >ham menu button</p>
            <div className='flex items-center'>
                <img src='/images/logo.png' alt='' className='h-10 mx-9'/>
                <div className='hidden lg:flex'>
                    {navbarData.map((link) => (
                        <p key={link.id} className='mx-2' >{link.title}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center '>
                <div className='flex items-center p-2 bg-blue-500 text-white rounded-md'>
                    <p className='ml-2 hidden lg:block'>sepehr</p>
                    <BsFillPersonFill />
                </div>
                <div className='mr-2'>
                    <FaShoppingBasket />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
