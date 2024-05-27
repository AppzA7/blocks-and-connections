"use client";
import React from 'react';

const Child = () => {
    return(
        <div className='w-128 h-96 p-4 bg-yellow-400 outline rounded-lg flex flex-row overflow-auto'>
            <p className='m-2 p-2'>This is line 1</p>
            <p className='m-2 p-2'>This is line 2</p>
        </div>
    )
}

export default Child;