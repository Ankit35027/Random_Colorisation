export default function Random_Dice(){
    const num1 = Math.ceil(Math.random()*3)
    const num2 = Math.ceil(Math.random()*3)
    return(
        <>
        <h1>Dice Roll</h1>
        {num1===num2?<h2>You Win</h2>:null}
        {num1===num2 && <h2>You Win</h2>}
        <p>num1: {num1}</p>
        <p>num2: {num2}</p>
        </>
    )
}