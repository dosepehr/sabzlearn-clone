import { mainContext } from '../context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    const { menu, setMenu, topbarLinks } = useContext(mainContext);
    const menuHandler = () => {
        setMenu(false);
    };
    return (
        <>
            <div
                className={`${
                    menu
                        ? 'absolute top-0 z-20 right-0 duration-300 min-[930px]:hidden'
                        : 'absolute top-0 z-20 -right-full duration-300 min-[930px]:hidden'
                }`}
            >
                <div className='bg-[#f3f3f3] h-screen py-10 w-[250px] flex flex-col'>
                    {topbarLinks.map((link) => (
                        <Link
                            to={link.href}
                            key={link.id}
                            className='text-[#141414] py-4 px-6 hover:bg-white duration-300'
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
            {menu && (
                <div
                    className='absolute bg-[#000000E5] opacity-40 h-full w-full top-0 bottom-0 right-0 left-0 z-10 min-[930px]:hidden'
                    onClick={menuHandler}
                ></div>
            )}
        </>
    );
};

export default Menu;
