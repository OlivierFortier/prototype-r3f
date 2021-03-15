import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Billboard, Html, Text } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";

export default function Scene() {
  return (
    <ARCanvas style={{ height: "100vh" }}>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Billboard
        position={[-4, -2, -10]}
        args={[3, 2]}
        material-color="#003261"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Text
          color={"#e26060"}
          fontSize={0.3}
          maxWidth={5}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          NOUS SOMMES EN RÉALITÉ AUGMENTÉE AVEC JAVASCRIPT. SUR LE WEB.
        </Text>
      </Billboard>
      <Billboard
        position={[-4, 2, -10]}
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
        position={[0, 0, -10]}
        args={[3, 2]}
        material-color="green"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Text
          color={"#e26060"}
          fontSize={0.3}
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          BIENVENUE DANS LE FUTUR DU WEB
        </Text>
      </Billboard>
      <Billboard
        position={[4, -2, -10]}
        args={[3, 2]}
        material-color="blue"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <p className="text-white">
            aucune <br /> contrainte.
          </p>
          <p className="text-white">
            on peut mixer du HTML à l'intérieur des objets
          </p>
        </Html>
      </Billboard>
      <Billboard
        position={[4, 2, -10]}
        args={[3, 2]}
        material-color="yellow"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Html prepend center fullscreen distanceFactor={10} transform>
          <h5>ceci est un bouton</h5>
          <button
            onClick={() => window.appHistory.push("/physique")}
            className="btn"
          >
            cliquez-moi
          </button>
        </Html>
      </Billboard>
    </ARCanvas>
  );
}
