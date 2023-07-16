import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { useEffect, useRef, useState } from "react";

export const ImageFadeMaterialDisplacement = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  },
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  /*glsl*/ ` 
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
       vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({
  ImageFadeMaterialDisplacement,
  RoundedPlaneGeometry: geometry.RoundedPlaneGeometry
});

export const FadingImageDisplacement = (props) => {
  const ref = useRef();
  const m = useRef()

  useEffect(() => {
    m.current.geometry.center()
  }, [])
  

  const [texture1, texture2, texture3, texture4, dispTexture] = useTexture([
    "./img (1).png",
    "./img (2).png",
    "./full_body.jpg",
    "./portrait.jpg",
    "./11.jpg"
  ]);

  const [hovered, setHover] = useState(false);

  const [te1, setTe1] = useState(texture1);
  const [te2, setTe2] = useState(texture2);
  const [count, setCount] = useState(0);


  setInterval(() => {
    if(count == 0) {
      setTe2(texture2)
      setCount(1)
      setHover(true)

    }
    else if(count == 1) {
      setTe1(texture3)
      setHover(false)

      setCount(2)

    }
    else if(count == 2) {
      setTe2(texture4)
      setCount(3)
      setHover(true)

    }
    else if(count == 3) {
      setTe1(texture1)
      setCount(0)
      setHover(false)

    }
  }, 5000);
  useFrame((_state, delta) => {
    easing.damp(ref.current, "dispFactor", hovered ? 1 : 0, 0.4, delta);
  });
  
  return (
    <mesh
      {...props}
      ref={m}
    >
      <roundedPlaneGeometry
        args={[2.25, 4]} // 9:16 aspect ratio
      />
      <imageFadeMaterialDisplacement
        ref={ref}
        tex={te1}
        tex2={te2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
};
