export default function Emoji({emo}){
    const num1=Math.floor(Math.random()*3)
    const num2=Math.floor(Math.random()*3)
    const num3=Math.floor(Math.random()*3)
    const isWinner = num1===num2 && num2===num3 && num3===num1
    return(
        <>
        <h1>{emo[num1]} {emo[num2]} {emo[num3]}</h1>
        {isWinner?<h2 style={{color:"green"}}>You Win</h2>:<h2 style={{color:"red"}}>You Loose</h2>}
        {isWinner && <h3>Congrats!!!</h3> }

        </>



    )
}