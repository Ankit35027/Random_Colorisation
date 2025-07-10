import {useState} from "react"
export default function ToggleSmile(){
    const [isSad,useisSad]=useState("🙁")
    return(
        <>
        <h1 onClick={()=>{
            if (isSad==="🙁"){
                useisSad("😊")
            }else{
                useisSad("🙁")
            }
        }}>{isSad}</h1>
        </>
    )
}