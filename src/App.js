import  "./App.css";
import {useState} from "react";

function App() {
const [count,setCount]=useState(0);
 function Increase(){
  setCount(count+1);
};
function Decrease(){
  setCount(count-1);
};
function Set_to_zero(){
  setCount(0);
};
  return (
    <div className="App">
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Set_to_zero}>Set to Zero</button>
      {count}
    </div>
    
// function App() {
//   const planets=[
//     {name:"Mars",isGasPlanet:false},
//     {name:"Earth",isGasPlanet:false},
//     {name:"Jupiter",isGasPlanet:true},
//     {name:"Venus",isGasPlanet:false},
//     {name:"Neptune",isGasPlanet:true},
//     {name:"Uranus",isGasPlanet:true},
//   ];
  
//   return (
//     <div className="App">{planets.map((planet,key)=>{
//       return(
//         planet.isGasPlanet &&<h1>{planet.name } </h1>
//       )
//     })}</div>
  );
};




export default App;
