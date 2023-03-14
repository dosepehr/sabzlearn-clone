import { topbarLinks, topbarIcons } from '../constants/topbarData';
const Topbar = () => {
    return (
        <div className='bg-[#00000024]'>
            <div className='lg:flex items-center justify-between container mx-auto 2xl:px-40 py-1 hidden'>
                <div className='flex'>
                    {topbarLinks.map((link) => (
                        <p
                            className='text-topbatLinks mx-2 text-md'
                            key={link.id}
                        >
                            {link.title}
                        </p>
                    ))}
                </div>
                <div className='flex items-center'>
                    <p className='text-white mx-2 font-semibold'>
                        sabzlearn@gmail.com
                    </p>
                    {/* TODO make links tooltip */}
                    {topbarIcons.map((icon) => (
                        <span className='mx-1 text-white text-sm '>{icon.icon}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
