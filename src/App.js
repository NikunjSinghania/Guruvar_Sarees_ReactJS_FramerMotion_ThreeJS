import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Components/Experience";
import { motion } from 'framer-motion'
import { useState } from "react";
export default function App() {

  const [ch, setCh] = useState(true)

  setTimeout(() => setCh(false), 5000)

  return (
    <>
    {
      ch && <section>
      <motion.div 
      initial={{
        y : '-100vh'
      }}
      animate={{
        y : '0'
      }}
      transition={{
        duration : 2
      }}
      exit = {{
        y : '-100vh'
      }}
      ></motion.div>
      <motion.div 
      initial={{
        y : '100vh'
      }}
      animate={{
        y : '0'
      }}

      transition={{
        duration : 2
      }}
      exit = {{
        y : '100vh'
      }}
      ></motion.div>
    </section>
    }
    
    </>
      
    
    // <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
    //   {/* <color attach="background" args={["rgba(0,0,0,0)"]} /> */}
    //   <Experience />
    // </Canvas>
  );
}
