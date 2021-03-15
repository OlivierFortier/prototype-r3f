import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Billboard, Html } from "@react-three/drei";
import {Link} from 'react-router-dom'

export default function Scene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Billboard
        position={[-4, -2, 0]}
        args={[3, 2]}
        material-color="red"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <p>
            Imaginez <br /> les possibilités
          </p>
        </Html>
      </Billboard>
      <Billboard
        position={[-4, 2, 0]}
        args={[3, 2]}
        material-color="orange"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <p>
            prototype d'interface <br /> nouveau genre
          </p>
        </Html>
      </Billboard>
      <Billboard
        position={[0, 0, 0]}
        args={[3, 2]}
        material-color="green"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <h1>hello</h1>
          <p>world</p>
        </Html>
      </Billboard>
      <Billboard
        position={[4, -2, 0]}
        args={[3, 2]}
        material-color="blue"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <p className="text-white">
            aucune <br /> contrainte
          </p>
        </Html>
      </Billboard>
      <Billboard
        position={[4, 2, 0]}
        args={[3, 2]}
        material-color="yellow"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <h5>ceci est un bouton</h5>
          <button onClick={() => window.appHistory.push("/physique")} className="btn">cliquez-moi</button>
        </Html>
      </Billboard>
    </Canvas>
  );
}
