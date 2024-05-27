"use client";

import { useAtom, atom, useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { auditLogAtom, writeAuditLogAtom } from './atoms';

interface Props {
    id?: string;
}

const ConnectorPoint = (props: Props) => {

    const [numberOfConnections, setNumberOfConnections] = useState(0);

    const writeAuditLog = useSetAtom(writeAuditLogAtom);

    const clickHandler = () => {
        setNumberOfConnections(numberOfConnections + 1);
        console.log("handler for connector ", props.id)
        writeAuditLog(`clicked ${props.id}`);
    }

    return(
        <div id={`_internal_${props.id}`} className={`h-full w-6 cursor-crosshair rounded-full ${numberOfConnections > 0 ? 'bg-lime-400' : 'bg-red-400'}`}
            onClick={clickHandler}>
                {numberOfConnections}
        </div>
    )
}

export default ConnectorPoint;