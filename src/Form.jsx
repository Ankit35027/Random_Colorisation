function handleClick(e){
    e.preventDefault();
    console.log("hi")
}
export default function Form(){
    return(
        <form action="" onSubmit={handleClick}>
            <button>Submit</button>
        </form>
    )
}