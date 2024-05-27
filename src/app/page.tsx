"use client";

import { useAtomValue } from "jotai";
import Block from "./components/block";
import CreateBlock from "./components/create-block";
import AuditLogs from "./components/global-state-audit";
import Sidebar from "./components/sidebar";
import { blocksAtom } from "./components/atoms";
import { useEffect } from "react";

export default function Home() {

  const blocks = useAtomValue(blocksAtom);
  
  useEffect(()=> {
    console.log(blocks);
  }, [blocks]);

  return (
    <div className="relative w-screen h-screen overflow-auto box-border">
      <Sidebar>
        <button className='text-grey-700 bg-slate-500 hover:bg-slate-600 w-24 text-sm outline rounded-lg'>Click me</button>
        <CreateBlock/>
        <AuditLogs/>
      </Sidebar>
      <main className="relative w-full h-full p-4 m-1 outline outline-dotted">
        {
          blocks.map((block) => {
            return block.block;
          })
        }
      </main>
    </div>
  );
}
