import React, { useEffect, useState } from 'react'

export default function HookObject() {

    // const [name,setName] = useState({firstName:'',lastName:''});
    const [items,setItems] = useState([])

    const [count,setCount] = useState(0);

    const addItem = ()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random() * 10)
        }])
    }

    const incre = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('use effect');
    },[count])
  return (
    <div>
        {/* <form>
            <input type="text" value={name.firstName} onChange={e => {setName({...name,firstName:e.target.value})}}/>
            <input type="text" value={name.lastName} onChange={e => {setName({...name,lastName:e.target.value})}}/>
        </form>

        {name.firstName}
        {name.lastName}
        {
            JSON.stringify(name)
        } */}

        {count}

<button onClick={incre}>Counter</button>
        <button onClick={addItem}>Add a Random Number</button>
        <ul>
            {items.map(item => (<li key={item.value}>{item.value}</li>))}
        </ul>
    </div>
  )
}
