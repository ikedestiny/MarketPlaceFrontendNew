import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
const Signup = () => {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen '>
                <div className='bg-white  rounded-2xl shadow-lg p-10 w-[70%]  max-w-sm'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-20 text-center'>Register</h1>
                    <input type="text" placeholder='Name' className='w-full p-3 mb-4 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input type="text" placeholder='Email' className='w-full p-3 mb-4 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input type="password" placeholder='Password' className='w-full p-3 mb-6 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <PrimaryButton title="Register" />
                    <p className='mt-5'>Already have an account? <a href="/login" className='underline font-[#07081e]'>Login Here</a></p>
                </div>
            </div>
        </>

    );
};

export default Signup;
