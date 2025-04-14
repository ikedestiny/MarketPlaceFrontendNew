import React from 'react';
import { useNavigate } from 'react-router-dom';
import Font, { Text } from 'react-font'
import { ImProfile } from "react-icons/im";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center  sticky top-0 bg-[#181828] w-full shadow-lg z-1 rounded-4xl'>
            <div className='mx-[10%] my-2 flex justify-between items-center w-full'>
                <a href="/" className='w-50 md:w-70 lg:w-100'><img src="/marketpleis-logo-zip-file/svg/logo-no-background.svg" alt="logo" /></a>
                {/* <Text family='Monoton' style={{ fontSize: 50, margin: 0 }} onLoad={() => console.log('loaded Monoton')}>
                    Super simple :)
                </Text> */}

                <input
                    type="text"
                    placeholder='Search items...'
                    className='bg-white rounded-full p-2 w-[30%] text-center mt-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <div className='text-white flex items-center space-x-5'>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </button>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/Home")}
                    >
                        Buy
                    </button>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/biz")}
                    >
                        <ImProfile />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Navbar;
