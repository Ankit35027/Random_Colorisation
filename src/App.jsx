import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
// import ListPicker from './ListPicker'
import Random_Dice from './Random_Dice'
import Emoji from './emoji'
import ShoppingList from './ShoppingList'
import Properties from './Properties'
import Clicker from "./Clicker"
import Form from "./Form"
import Counter from './Counter'
import ToggleSmile from './ToggleSmile'
import ColorBox from './ColorBox'
import FinalColor from './FinalColor'
import Heading from './Heading'
// const data= [
//   {
//     id: 1,
//     items:"eggs",
//     quantity:12,
//     completed: false
//   },
//   {
//     id: 2,
//     items:"milk",
//     quantity:1,
//     completed: true
//   },
//   {
//     id: 3,
//     items:"butter",
//     quantity:4,
//     completed: false
//   },
//   {
//     id: 4,
//     items:"carrots",
//     quantity:6,
//     completed: true
//   }
// ]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];


function App() {
  const a=["Ankit","Abhishek","Keshav","Piyush"]
  const emo = ["🍎","🐱","🦊"]
  const colors = ["red","violet","orange","green","yellow","blue","teal"]

  return (
    <>
    {/* <Emoji emo={emo}/>
    <Emoji emo={emo}/>
    <Emoji emo={emo}/> */}
    {/* <ShoppingList items={data}/> */}
    {/* <Form></Form>
    <Properties data={properties}/> */}
    {/* <Clicker message="Dont Disturb me "  buttonText='Come on Babes'/>
    <Counter/>
    <ToggleSmile/> */}
    {/* <ColorBox Colors={colors}/> */}
    <Heading/>
    <FinalColor Color={colors}/>

    
    </>
  )
}

export default App
