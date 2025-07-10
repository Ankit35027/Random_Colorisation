import {useState} from "react"
export default function Counter(){
    const [num,setnum]=useState(0)
    return (
        <div>
            <p>The Count is: {num}</p>
            <button onClick={()=>{
                
                setnum(num+10)
                }}>Increment</button>
        </div>
    )

}