import  "./App.css";

function App() {
  
  return (
    <div className="App">
     <User name="Manish" age={21} gmail="manish@gmail.com"/>
     <User name="Manish" age={21} gmail="manish@gmail.com"/>
    </div>
  )
};


const User=(props)=>{
 return( <div>
          <h1>{props.name}</h1>
          <h1>{props.age}</h1>
          <h1>{props.gmail}</h1>
          </div> 
          
       )
};


export default App;
