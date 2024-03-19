import  "./App.css";

function App() {
  
  return (
    <div className="App">
     <Jobs salary={9000} position="SDE" company="Google"/>
     <Jobs salary={100000} position="SDE" company="Microsoft"/>
     <Jobs salary={1500000} position="SDE" company="Meta"/>
     
    </div>
  );
};


const Jobs=(props)=>{
 return( <div>
          <h1>{props.salary}</h1>
          <h1>{props.position}</h1>
          <h1>{props.company}</h1>
          </div> 
          
       );
};


export default App;
