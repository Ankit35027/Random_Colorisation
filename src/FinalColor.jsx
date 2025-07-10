import ColorBox from "./ColorBox"
import "./FinalColor.css"
export default function FinalColor({Color}){
    const arr=[]
    for(let i=0;i<105;i++){
        arr.push(<ColorBox Colors={Color}/>)
    }
    return(
        <>
        <div className="fun">
            {arr}
        </div>
        </>
    )
}