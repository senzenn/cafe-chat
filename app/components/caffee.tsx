import { Canvas } from "@react-three/fiber";
import { AnimeCafe } from "../Models/anime-cafe";

const CaffeeModel = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <AnimeCafe />
        </mesh>
      </Canvas>
    </>
  );
};

export default CaffeeModel;
