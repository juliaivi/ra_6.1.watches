import AddWatch from './AddWatch';
import { useState } from 'react';
import { Clock } from "./Clock";


export function Watches()  {
    const [watches, setWatches] = useState([]);

    const handleAdd = (watch) => { // добаление нового переданого элемента в массив 
        setWatches(prevWatches => [...prevWatches, watch]);
    }

    const onDelete = (id) => {
        setWatches(watches.filter(item => item.id !== id))
    }

    return(
        <>
            <AddWatch onAdd={handleAdd}/>
            <ul className="list_watch">
                {watches.map(watch => <Clock key={watch.id} {...watch} onDelete={onDelete}/>)}
            </ul>
        </>
    )
}