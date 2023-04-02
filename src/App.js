import './App.css';
import { AnimationBox } from './components/0A_Animation_Box';
import { useState } from "react"
import { Render } from './components/0B_Render';

function App() {
  const [animationBool, setAnimationBool] = useState(false);

  return (
    <div className="App">
      {animationBool? AnimationBox() : Render()}
    </div>
  );
}

export default App;
