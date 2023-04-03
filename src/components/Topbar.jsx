import { topbarIcons } from '../constants/topbarData';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { mainContext } from '../context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Topbar = () => {
    const { topbarLinks } = useContext(mainContext);

    return (
        <div className='bg-[#00000024] px-2'>
            <div className='flex max-[930px]:hidden items-center justify-between p-2 mx-auto w-full max-w-[1080px]'>
                <div className='flex'>
                    {topbarLinks.map((link) => (
                        <Link
                            to={link.href}
                            className='text-topbatLinks mx-2 text-sm'
                            key={link.id}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center'>
                    <p className='text-white ml-2 font-semibold'>
                        sabzlearn@gmail.com
                    </p>
                    {topbarIcons.map((icon, index) => (
                        <>
                            <div
                                key={index}
                                className='mx-1 text-white text-sm'
                            >
                                <span
                                    className='mx-1 text-white text-sm'
                                    id={`link-${icon.id}`}
                                >
                                    {icon.icon}
                                </span>
                                <ReactTooltip
                                    anchorId={`link-${icon.id}`}
                                    place='bottom'
                                    content={`مارا در ${icon.tooltip} دنبال کنید`}
                                />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
