export default function Clicker({buttonText="Click",message}){
    return(
        <div className="Card">
        <p>Click The Button</p>
        <button onClick={()=>{alert(message)}}>{buttonText}</button>
        </div>
    )
}