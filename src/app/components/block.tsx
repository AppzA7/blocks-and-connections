"use client";

import React from 'react';
import { Rnd } from 'react-rnd';
import Child from './sample-child';
import ConnectorPoint from './connector-point';
import { useAtomValue, useSetAtom } from 'jotai';
import { topBlockIdAtom, updateTopBlockAtom } from './atoms';

interface Props {
    id: string;
}
const Block = (props: Props) => {

    const topBlockId = useAtomValue(topBlockIdAtom)
    const updateTopBlock = useSetAtom(updateTopBlockAtom);

    return(
        <Rnd
            minHeight={'100px'}
            minWidth={'100px'}
            bounds={"parent"}
            dragHandleClassName='drag-handle'
            className={`outline rounded-lg overflow-hidden ${topBlockId === props.id ? 'z-10 outline-4' : 'z-0'}`}
            key={`rnd-${props.id}`}
            onMouseDown={()=> updateTopBlock(props.id)}
            >
            <div className='cursor-move text-center h-7 w-full bg-yellow-200 flex select-none' >
                <ConnectorPoint key={`left-connector-${props.id}`} id={`left-connector-${props.id}`}></ConnectorPoint>
                <div className='drag-handle flex-1'>{props.id}</div>
                <ConnectorPoint key={`right-connector-${props.id}`} id={`right-connector-${props.id}`}></ConnectorPoint>
            </div>
            <div className='w-full h-full p-4 outline rounded-xl text-centered overflow-auto bg-emerald-50 '>
                <p className='m-2 p-2'>This is a draggable</p>
                <Child/>
            </div>
        </Rnd>
    )
}

export default Block;