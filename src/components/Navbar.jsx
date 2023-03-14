import { navbarData } from '../constants/navbarData';
import { FaShoppingBasket } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
const Navbar = () => {
    return (
        <div className='border-b-[1px] border-b-white border-opacity-30'>
            <div className='max-w-[1080px] items-center justify-between mx-auto p-2 flex'>
                <div className='min-[930px]:hidden'>
                    <div class='hamburger-menu'>
                        <div class='bar'></div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src='/images/logo.png' alt='' className='h-10 ml-9' />
                    <div className='hidden min-[930px]:flex'>
                        {navbarData.map((link) => (
                            <p key={link.id} className='mx-2 text-topbatLinks'>
                                {link.title}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center p-2 bg-blue-500 text-white rounded-md'>
                        <p className='ml-2 hidden min-[930px]:block'>sepehr</p>
                        <BsFillPersonFill />
                    </div>
                    <div className='mr-2 text-white text-xl'>
                        <FaShoppingBasket />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
