//@ts-nocheck
import React, { useEffect, useState } from "react";
import { OrbitControls, Billboard, Html, Text } from "@react-three/drei";
import { ARCanvas, Interactive } from "@react-three/xr";

export default function Scene() {
  // état du bouton
  const [hover, setHover] = useState(false);

  // afficher un curseur de pointeur si hover
  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  // toute la scène est construite à partir d'éléments déclaratifs et représentatifs !
  return (
    <>
      <ARCanvas style={{ height: "100vh" }} dpr={[1,2]}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Billboard
          position={[-4, -2, -4]}
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
            anchorX="center"
            anchorY="middle"
          >
            NOUS SOMMES EN RÉALITÉ AUGMENTÉE AVEC JAVASCRIPT. SUR LE WEB.
          </Text>
        </Billboard>

        <mesh position={[-4, 2, -4]} rotation={[0.2, 0.5, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="red" />
          <Html distanceFactor={1.1} position={[0, 0, 0.5]} transform>
            <div className="formulaire">
              <h2>Connexion</h2>
              <form>
                <span>
                  <label htmlFor="nom">Nom</label>
                  <input id="nom" type="text" />
                </span>
                <span>
                  <label htmlFor="pass">Mdp</label>
                  <input id="pass" type="text" />
                </span>
                <button onClick={(e) => e.preventDefault()}>
                  Se connecter
                </button>
              </form>
            </div>
          </Html>
        </mesh>

        <Billboard
          position={[0, 0, -4]}
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
            anchorX="center"
            anchorY="middle"
          >
            BIENVENUE DANS LE FUTUR DU WEB
          </Text>
        </Billboard>
        <Billboard
          position={[4, -2, -4]}
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
        <Interactive
          // @ts-ignore
          onSelect={() => window.appHistory.push("/physique")}
          onHover={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          <Billboard
            position={[4, 2, -4]}
            args={hover ? [4, 3] : [3, 2]}
            material-color="yellow"
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false}
            //@ts-ignore
            onPointerUp={() => window.appHistory.push("/physique")}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <Text
              color={"#000000"}
              fontSize={0.3}
              maxWidth={2}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign={"left"}
              anchorX="center"
              anchorY="middle"
            >
              Cliquez-moi !!
            </Text>
          </Billboard>
        </Interactive>
      </ARCanvas>
    </>
  );
}
