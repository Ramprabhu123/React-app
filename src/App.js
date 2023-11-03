import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css'
import { useState } from "react";

function App() {
  const [count,setCount]=useState(99);
  function incrementFunction(){
    setCount(count+1)
  }
  return (
    <div className="App">
      <Header/>
      I am Suresh
      <Content/>
      <button>Like</button>
      <button>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button>
      <Footer/>
    </div>
  );
}

export default App;