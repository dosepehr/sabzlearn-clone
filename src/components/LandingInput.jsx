import { BiSearchAlt } from 'react-icons/bi';
import { useContext } from 'react';
import { mainContext } from '../context';
import debounce from 'lodash.debounce';
const LandingInput = () => {
    const { setSearchQuery } = useContext(mainContext);
    const searchQueryHandler = debounce(
        (value) => {
            setSearchQuery(value);
        },
        250,
        { maxWait: 1000 }
    );
    return (
        <div className='relative w-1/2 min-w-[300px] '>
            <input
                placeholder='جستجو...'
                type='text'
                className='bg-[#ffffff33] text-white p-4 rounded-full w-full placeholder:text-white placeholder:text-2xl'
                onChange={(e) => searchQueryHandler(e.target.value)}
            />
            <button
                type='submit'
                className='absolute left-5 bottom-[0.5rem] text-white text-4xl'
            >
                <BiSearchAlt />
            </button>
        </div>
    );
};

export default LandingInput;
