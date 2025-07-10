import Card from "./CardProperties";
import "./Properties.css"
export default function Properties({data}){
    return(
        <>
        <div className="Card">
        {data.map((i)=><Card key={i.id} name={i.name} rating={i.rating} price={i.price}/>)}
        </div>
        </>
    )

}