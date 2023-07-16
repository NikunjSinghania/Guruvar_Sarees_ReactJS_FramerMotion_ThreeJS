import { OrbitControls } from "@react-three/drei";
// import { FadingImage } from "./FadingImage";
import { FadingImageDisplacement } from "./FadingImageDisplacement";

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <FadingImageDisplacement position-x={0} position-z={0} rotation-x={0} />
    </>
  );
};
