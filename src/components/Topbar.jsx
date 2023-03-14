import { topbarLinks } from '../constants/topbarData';
const Topbar = () => {
    return (
        <div className='flex bg-[#00000024]'>
            {topbarLinks.map((link) => (
                <p className='text-topbatLinks mx-2 text-md' key={link.id}>
                    {link.title}
                </p>
            ))}
        </div>
    );
};

export default Topbar;
