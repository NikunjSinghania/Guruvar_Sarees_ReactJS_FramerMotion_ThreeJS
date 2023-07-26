import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <motion.section
        // initial = {{
        //     maxHeight: 0,
        // }}
        // transition={{
        //     duration : 1,
        //     delay : 1
        // }}
        // animate = {{
        //     maxHeight: '100vh',

        // }}
        id="home" 
            style={{
                backgroundColor : '#011917'
            }}
    >
        <motion.nav
        initial = {{
             y:50,
            opacity : 0
        }}
        transition={{
            duration : 1,
            delay : 1
        }}
        animate = {{
             y    : '0',
            opacity : 1
        }}
        >
            <Link to="/">
                <img id="logo" src={process.env.PUBLIC_URL+'Guruvar_Saree (1).png'} />
            </Link>
            {/* <span id='links'>
                <Link to="/"><p>HOME</p></Link>

                <Link to="#collection"><p>COLLECTION</p></Link>
                <Link><p>GET IN TOUCH</p></Link>

            </span> */}
        </motion.nav>
        <div id='container'>
        <motion.span
        id='mainContainer'
        initial = {{
                maxHeight:'0.1vh',
            }}
            transition={{
                duration : 1,
                delay : 1
            }}
            animate = {{
                maxHeight: '60vh',
            }}>
            <img className='main' src={process.env.PUBLIC_URL+'main.jpg'} />
            <span
            
            id='textContainer'>
                <motion.h1
                initial = {{
                    y:'300px',
                }}
                transition={{
                    duration : 1,
                    delay : 2
                }}
                animate = {{
                    y: '0px',
                }}

                >COLORS</motion.h1>

                </span>
            <img className='mainup' src={process.env.PUBLIC_URL+'mainb.png'} />

        </motion.span>
       

        </div>
        
    </motion.section>
  )
}

export default Home