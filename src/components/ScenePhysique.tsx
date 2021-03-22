import React, { useState,  useEffect } from "react";
import '../Physique.css';
import { Canvas, MeshProps } from "react-three-fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Html } from "@react-three/drei";

// composant de plan physique
function Plane(props) {

  // simple hook de cannon.js permettant d'ajouter des propriétés de collision au plan
  const [ref] : Array<MeshProps> = usePlane(() => ({  ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshPhongMaterial color='#272727'/>
    </mesh>
  );
}

// composant de cube physique
function Box({position, ...restProps} : {position?: [number, number , number]; restProps?: any}) {
  
  // la librairie cannon.js permet d'ajouter des propriétés physiques aux éléments
  const [ref] = useBox(() => ({ mass: 1000, args: [2,2,2], position, ...restProps }));

  // simple état du texte contenu dans les boites
  const [texte, setTexte] = useState('')

  // faire apparatire le texte apres 3 secondes
  useEffect(() => void setTimeout(() => setTexte('imaginez des éléments UI qui bougent'), 3000), []);

  return (
    <mesh ref={ref} castShadow receiveShadow >
      <Html>
        {
          // @ts-ignore
        }<h1>yeeehaah</h1><p>{texte}</p>
      </Html>
      <boxBufferGeometry />
      <meshStandardMaterial/>
    </mesh>
  );
}

// construction déclarative de la scène. On a simplement à exprimer ce qu'on veut voir
export default function ScenePhysique() {

  // états de la scène
  const [showPlane, set] = useState<boolean>(true);

  // désactiver un plan apres 5 secondes
  useEffect(() => void setTimeout(() => set(false), 5000), []);

  return (
    <Canvas style={{ height: "100vh" }} className="main" shadowMap camera={{ position: [0, 0, 10], }}>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[30, 30, 50]}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      {
        // @ts-ignore
      }<Physics gravity={[0,0, -10]}>
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
