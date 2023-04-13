import './App.css';
import { AnimationBox } from './components/0A_Animation_Box';
import { useState } from "react"
import { Render } from './components/0B_Render';
import { animated, useSpring } from '@react-spring/web';

function App() {
  const [animationBool, setAnimationBool] = useState(false);
  const fadeAnimation = useSpring({from: {opacity: 0}, to: {opacity: 1}})

  return (
    <animated.div className="App" style={fadeAnimation}>
      {animationBool? AnimationBox() : Render()}
    </animated.div>
  );
}

export default App;
