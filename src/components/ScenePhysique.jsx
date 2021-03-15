import React from "react";
import { Canvas,  } from "react-three-fiber";
import { OrbitControls,   } from "@react-three/drei";

export default function ScenePhysique() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
          <boxBufferGeometry/>
          <meshStandardMaterial/>
      </mesh>
    </Canvas>
  );
}
