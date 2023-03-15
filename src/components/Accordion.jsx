import { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
function Accordion({ sections }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleSection = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className='accordion'>
            {sections.map((section, index) => (
                <div key={index} className='rounded-lg mb-4 overflow-hidden'>
                    <button
                        className='w-full flex justify-between items-center bg-secondaryColor p-4'
                        onClick={() => toggleSection(index)}
                    >
                        <span className='font-medium text-topbatLinks'>
                            {section.title}
                        </span>
                        <svg
                            className={`w-5 h-5 transition-transform transform fill-topbatLinks ${
                                expandedIndex === index ? 'rotate-180' : ''
                            }`}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>

                    {section.sessions.map((session) => (
                        <div
                            className={`p-4 bg-secondaryColor text-topbatLinks flex items-center justify-between border-t border-primaryColor ${
                                expandedIndex === index ? 'block' : 'hidden'
                            } transition-all duration-500`}
                        >
                            <div className='flex items-center justify-center'>
                                <div className='w-8 h-8 rounded-full border border-topbatLinks flex items-center justify-center'>
                                    <p>{session.id}</p>
                                </div>
                                <BsFillPlayCircleFill className='mx-3' />
                                <p>{session.title}</p>
                            </div>

                            <div className='text-topbatLinks'>
                                {session.time}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
