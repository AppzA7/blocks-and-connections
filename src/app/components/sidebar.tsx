"use client";

import React, { useState } from 'react';

const Sidebar = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [sidePanelOpen, setSidePanelOpen] = useState(false);

    const toggleSidebar = () => {
        setSidePanelOpen(!sidePanelOpen);
    }
    return(
        <>
            <button onClick={toggleSidebar} className="fixed top-4 right-4 z-50 w-8 h-8 outline rounded-full m-4">
                {sidePanelOpen ? "»" : "«"}
            </button>
            <div className={`fixed top-0 right-0 h-full w-fit-content z-40 transition-transform transform
                                 ${sidePanelOpen ? 'translate-x-0': 'translate-x-full'}
                                 outline rounded-xl
                                 bg-slate-300 m-4 mt-0`}>
                <div className='mt-20 flex flex-col justify-center '>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Sidebar;