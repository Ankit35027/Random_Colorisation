import {useState} from "react"
export default function ColorBox({Colors}){
    const num1 = Math.floor(Math.random()*7)
    const [color,useColor]=useState(Colors[num1])
    const callback=()=>{
        const num2 = Math.floor(Math.random()*7)
        useColor(Colors[num2])
    }
    return(
        <>
        <div style={{backgroundColor:color,height:"100px",width:"100px"}} onClick={callback}>

        </div>
        </>
    )
}