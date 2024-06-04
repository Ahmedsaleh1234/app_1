import { useState } from "react";
function Hello(){
function alt(){
  alert('hello')
}
return(  
<button onClick={alt}>click me</button>
)
}
function State(){
  const [count, setcount] = useState(0)
  function st(){
    setcount(count + 1);
  }
  return(
    <button onClick={st}> click me {count}</button>
  )
}
function App() {
  return (
    <div>
    <Hello />
    <br/>
    <br/>
    <State />
    </div>
  );
}

export default App;
