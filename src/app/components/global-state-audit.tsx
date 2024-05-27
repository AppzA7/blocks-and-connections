"use client";

import React, { useEffect, useRef } from 'react';
import { auditLogAtom } from './atoms';
import { useAtomValue } from 'jotai';


const AuditLogs = () => {

    const auditLogs = useAtomValue(auditLogAtom);
    const dummy = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dummy.current?.scrollIntoView({ behavior: "smooth" });
      }, [auditLogs]);
    
    return(
        <div className='w-96 h-48 outline bg-white text-neutral-500 p-2 m-2 overflow-x-auto'>
            {auditLogs.map((log, index) => <li key={index} className='p-1'> {log} </li>)}
            <div ref={dummy}/>
        </div>
    )
}

export default AuditLogs;