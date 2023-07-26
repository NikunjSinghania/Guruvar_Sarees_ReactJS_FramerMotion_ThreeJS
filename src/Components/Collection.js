import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../Collection.css";
import { motion } from "framer-motion";


const Arr = (item) =>{
    const arr = [1,2,3, 4, 5, 6, 7, 8]
    return (
        
        arr.map(e => {
            return <span className="both">
                    <LazyLoadImage src={process.env.PUBLIC_URL+item.item+'/100'+e+'.jpg'} />
                    <motion.span initial={{
                            top : '0'
                        }}
                        whileInView={{
                            top : '100%'
                        }}
                        transition={{
                            delay : '0.'+e,
                        duration: 0.5,
                }}
                viewport={{ once: true }}
                ></motion.span>
            </span>
        })

        
    )
}

function Collection(props) {
  const variantl = {
    initial: {
      maxHeight: "0",
    },
    whileInView: {
      maxHeight: "100vh",
    },
  };


  return (
    <section id="collection">
      <div className="collectionFirst">
        <motion.span
          className="backgroundTexture"
          variants={variantl}
          initial={{
            filter : 'blur(0px)'
          }}
          whileInView={{
            filter : 'blur(20px)'

          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <LazyLoadImage src={process.env.PUBLIC_URL + "te.jpg"} />
        </motion.span>
        <span className="name">
          <motion.h1
            
          >
            {props.props}
          </motion.h1>
        </span>
      </div>
      <div className="imagesContainer">
      <Arr item={props.props} /> 

        </div>
    </section>
  );
}

export default Collection;
