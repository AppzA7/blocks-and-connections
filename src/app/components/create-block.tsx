"use client";

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { addBlockAtom, blockIdAtom, blocksAtom, writeAuditLogAtom } from './atoms';
import Block from './block';

const CreateBlock = () => {


    const addBlock = useSetAtom(addBlockAtom);
    const currentId = useAtomValue(blockIdAtom);
    const writeAuditLog = useSetAtom(writeAuditLogAtom);

    const clickHandler = () => {
        addBlock(<Block id={currentId}/>)
    }

    return (
        <button onClick={clickHandler} className='rounded-lg bg-orange-400 p-4 m-2'>
            Create a new block!
        </button>
    )
}

export default CreateBlock;