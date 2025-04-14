import React from 'react'

const PrimaryButton = ({ title }) => {
    return (
        <button className='w-full p-3 bg-[#070a32] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>{title}</button>
    )
}

export default PrimaryButton