import { useState } from "react"

export default function team (){

    const [team, setTeam] = useState(11);

    const handleAdd =()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove =()=>{
        setTeam(team -1);
    }
    const styleTeam ={
        border:'5px solid #840000',
        margin:'2px',
    }
    return(
        <div style={styleTeam }>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}