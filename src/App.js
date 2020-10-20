import React, {useState} from 'react';

import './App.css';

function App() {
  
  const [count,setCount] = useState(0)
return(
<div>

 <button onClick = {() => setCount(count + 1)}>INCREMENT</button> {count}
 <button onClick = {() => setCount(count - 1)}>DECREMENT</button> 
 <button onClick = {() => setCount(0)}>RESET</button> 
  </div>

);
}

export default App;
