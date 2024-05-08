import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(50);
    
    const handleAdd=()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const hendleReduse = () =>{
        const newCount=count -1;
        setCount(newCount);
    }

    return(
        <div style={{border:'5px solid #840000'}} >
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={hendleReduse}>Reduse</button>
        </div>
    )
}