
import { useState } from 'react';
import './App.css';

function App() {

  const [progress, setProgress] = useState(false)
  const [count, setCount] = useState(0)

  const times  = {
    animationIterationCount: count
  }

  let porgressStyle = "progress-color"

  const run = ()=>{
    setCount(count+1)
    setProgress(true)
    
  }


  


  return (

<div className="App">


<h1>Progress Bar</h1>


<div className="progress-container">
  <h2>Hack NASA</h2>
<div className="progress-bar">
  <div style={times} className={progress ? porgressStyle+=' run' : null}></div>
</div>
<button onClick={()=>{
  run()
}}>RUN</button>


<h2>{count}</h2>

</div>


</div>



  


  );
}

export default App;
