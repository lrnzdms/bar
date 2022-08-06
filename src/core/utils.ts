
const mergeUnique = <T>(arrs: T[][]):T[] => {
    return arrs.reduce((all, cur) => {
        all.push(...cur.filter(a => all.indexOf(a)===-1));
        return all;
    }, [] as T[]);
}

const mergeById = <T extends { id: string }>(arr1: T[], arr2: T[]): T[] => {
    let arr = arr1.map(a => a);
    arr2.forEach(v => {
        arr = arr.filter(a => a.id !== v.id);
        arr.push(v);
    })

    return arr;
}

const addByIdProp = <T extends {id:string}>(arr:T[], ...adds:T[]) => {
    adds.forEach(add => {
        const entry = arr.find(a => a.id===add.id);
        if (entry) {
            Object.assign(entry, add)
        } else {
            arr.push(add)
        }
    })
}

const sortByIdProp = <T extends {id:string}>(arr:T[], ids:string[]):T[] => {
    const reordered = ids.map((id, idx) => {
        const item = arr.find(el => el.id===id);
        if (!item) throw new Error("Could not find element with id: " + id);
        return item;
    })

    return reordered;        
}

export const ArrayUtils = {
    mergeUnique,
    mergeById,
    addByIdProp,
    sortByIdProp
}

export const GUID = ():string => Math.random().toString(36).substr(2, 8);
