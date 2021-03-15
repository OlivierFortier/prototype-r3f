import React, { useState, useRef, useEffect } from "react";
import '../Physique.css';
import { Canvas } from "react-three-fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

function Plane(props) {
  const [ref] = usePlane(() => ({  ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshPhongMaterial color='#272727'/>
    </mesh>
  );
}

function Box(props) {
  const [ref] = useBox(() => ({ mass: 1000, args: [2,2,2],...props }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshStandardMaterial/>
    </mesh>
  );
}

export default function ScenePhysique() {
  const [showPlane, set] = useState(true);
  useEffect(() => void setTimeout(() => set(false), 5000), []);

  return (
    <Canvas style={{ height: "100vh" }} className="main" shadowMap camera={{ position: [0, 0, 20], }}>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[30, 30, 50]}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      <Physics gravity={[0,0, -10]}>
        <Plane position={[0, 0, -10]} />
        {showPlane && <Plane position={[0, 0, 0]} />}
        <Box position={[1, 0, 1]} />
        <Box position={[2, 1, 5]} />
        <Box position={[0, 0, 6]} />
        <Box position={[-1, 1, 8]} />
        <Box position={[-2, 2, 13]} />
        <Box position={[2, -1, 13]} />
        {!showPlane && <Box position={[0.5, 1.0, 20]} />}
      </Physics>
    </Canvas>
  );
}
