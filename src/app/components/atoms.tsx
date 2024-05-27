"use client"

import { atom } from 'jotai';

export const auditLogAtom = atom<string[]>([])
export const writeAuditLogAtom = atom(null, (get, set, newItem: string) => {
    const currentLogs = get(auditLogAtom);
    set(auditLogAtom, [...currentLogs, newItem])
})

export const blockIdAtom = atom(0);

export interface BlockAtomType {
    id: number,
    block: React.JSX.Element
}
export const blocksAtom = atom<BlockAtomType[]>([])

export const addBlockAtom = atom(
    null, 
    (get, set, nextItem: React.JSX.Element) => {
        const currentItems = get(blocksAtom);
        const currentId = get(blockIdAtom);
        const auditLogs = get(auditLogAtom);
        set(blocksAtom, [...currentItems, {id: currentId, block: nextItem}]);
        set(blockIdAtom, currentId+1);
        set(writeAuditLogAtom, `New block created with id" + ${currentId}`)
    }
)

export const topBlockIdAtom = atom<string>("");

export const updateTopBlockAtom = atom(null,
    (get, set, id: string) => {
        const currentTopBlockId = get(topBlockIdAtom);
        if(currentTopBlockId === id) return;
        set(topBlockIdAtom, id);
        set(writeAuditLogAtom, "Top block is now " + id)
    }
);