export default function Greeter(props){
    console.log(props)
    return(
        <>
        <h1>{props.name}</h1>
        </>
    )
}