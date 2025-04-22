import * as THREE from "three";
import { Decal, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import DashedLineCurve from "./LineCurve";
import { dataPathTexture } from "@data/DataPathImageTexture";
import type { dataPathTextureT } from "@data/DataPathImageTexture";
import { useDivRefsStore } from "@store/store-sections";
import { Canvas } from "@react-three/fiber";

interface textureMeshI extends Omit<dataPathTextureT, "image" | "id"> {
  texturePath: string;
}

type handleEventThreT = (event: ThreeEvent<PointerEvent>) => void;

function TexturedMesh({
  texturePath,
  positionMesh,
  positionDecal,
  rotation,
  scalemesh,
  scaleDecal,
}: textureMeshI) {
  const texture = useTexture(texturePath);
  const meshRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handlePointerDown: handleEventThreT = (event) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handlePointerMove: handleEventThreT = (event) => {
    if (!isDragging || !meshRef.current || !lastMousePosition) return;

    const deltaX = event.clientX - lastMousePosition.x;
    const deltaY = event.clientY - lastMousePosition.y;

    meshRef.current.rotation.y += deltaX * 0.01; // Rotación en eje Y
    meshRef.current.rotation.x += deltaY * 0.01; // Rotación en eje X

    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => setIsDragging(false);
  return (
    <>
      <mesh
        ref={meshRef}
        scale={scalemesh}
        rotation={rotation}
        position={positionMesh}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp} // Por si el puntero sale de la malla
      >
        <octahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="white" flatShading />
        <Decal
          map={texture}
          position={positionDecal}
          rotation={[0, 0, 0]}
          scale={scaleDecal}
        />
      </mesh>
    </>
  );
}

export default function SkillsScene() {
  const [DataPathTexture] = useState(dataPathTexture);
  const skillSectionRef = useRef<HTMLDivElement | null>(null);
  const setDivRef = useDivRefsStore((state) => state.setDivRef);
  useEffect(() => {
    if (skillSectionRef.current) {
      setDivRef("Skills", skillSectionRef);
    }
  }, [skillSectionRef, setDivRef]);
  return (
    <div className="w-full flex flex-col justify-around items-center h-screen max-sm:h-[50vh]"
      ref={skillSectionRef}
    >
      <div className="w-full flex flex-row justify-center items-center">
        <h1 className="w-[90%] text-white text-4xl 
          font-bold text-center border-b-2 border-t-2 border-dashed">Skills</h1>
      </div>
      <div
        id="Skills"
        className="w-full h-full"
      >
        <Canvas>
          <directionalLight intensity={1.7} position={[1, 6, 10]} />
          <ambientLight intensity={0.1} position={[1, 4, 4]} />
          <Suspense fallback={null}>
            {DataPathTexture.map((texture) => (
              <TexturedMesh
                key={texture.id}
                texturePath={`/texturesGeometry/${texture.image}.png`}
                positionDecal={texture.positionDecal}
                positionMesh={texture.positionMesh}
                rotation={texture.rotation}
                scalemesh={texture.scalemesh}
                scaleDecal={texture.scaleDecal ? 1.5 : texture.scaleDecal}
              />
            ))}
            <group>
              <DashedLineCurve
                controlPoints={[
                  new THREE.Vector2(-3, 0),
                  new THREE.Vector2(-3, 4),
                  new THREE.Vector2(3, 4),
                  new THREE.Vector2(3, 0),
                ]}
                dashSize={1}
              />
              <DashedLineCurve
                controlPoints={[
                  new THREE.Vector2(-3, 0),
                  new THREE.Vector2(-3, -4),
                  new THREE.Vector2(3, -4),
                  new THREE.Vector2(3, 0),
                ]}
                dashSize={1}
              />
            </group>
            <group>
              <DashedLineCurve
                controlPoints={[
                  new THREE.Vector2(-1.5, 0),
                  new THREE.Vector2(-1.5, 2),
                  new THREE.Vector2(1.5, 2),
                  new THREE.Vector2(1.5, 0),
                ]}
                dashSize={0.5}
              />
              <DashedLineCurve
                controlPoints={[
                  new THREE.Vector2(-1.5, 0),
                  new THREE.Vector2(-1.5, -2),
                  new THREE.Vector2(1.5, -2),
                  new THREE.Vector2(1.5, 0),
                ]}
                dashSize={0.5}
              />
            </group>
          </Suspense>
          {/*<OrbitControls enableZoom={false} />*/}
        </Canvas>
      </div>
    </div>
  );
}
