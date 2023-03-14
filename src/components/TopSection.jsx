import { Landing, Navbar, Topbar } from './index';

const TopSection = () => {
    return (
        <div className='top pb-24'>
            <Topbar />
            <Navbar />
            <Landing />
        </div>
    );
};

export default TopSection;
