import {useState} from 'react'

type myType = {
    title: number,
    desc: string,
}

export default function Counter(){

    let [data, setData] = useState(0)
    function count(){
        data++;
        setData(data);
        console.log(data);
        
    }
    return (
        <>
            <button onClick={count}>+</button>
            <span>{data}</span>
        </>
    )
}