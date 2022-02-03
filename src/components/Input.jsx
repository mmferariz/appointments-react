import React from 'react';

const Input = ({id, type = "text", placeholder, name, onChange, value}) => {
    return (
        <div className='mb-2'>
            <label htmlFor={id} className='block text-gray-700 uppercase font-bold'>{name}</label>
            <input id={id} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    );
};

export default Input;
