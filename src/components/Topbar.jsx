import { topbarLinks, topbarIcons } from '../constants/topbarData';
const Topbar = () => {
    return (
        <div className='bg-[#00000024] px-2'>
            <div className='flex max-[930px]:hidden items-center justify-between p-2 mx-auto w-full max-w-[1080px]'>
                <div className='flex'>
                    {topbarLinks.map((link) => (
                        <p
                            className='text-topbatLinks mx-2 text-sm'
                            key={link.id}
                        >
                            {link.title}
                        </p>
                    ))}
                </div>
                <div className='flex items-center'>
                    <p className='text-white ml-2 font-semibold'>
                        sabzlearn@gmail.com
                    </p>
                    {/* TODO make links tooltip */}
                    {topbarIcons.map((icon) => (
                        <span className='mx-1 text-white text-sm '>
                            {icon.icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
