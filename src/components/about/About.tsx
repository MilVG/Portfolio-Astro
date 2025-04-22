import { Canvas } from "@react-three/fiber"
import { ModelGamerRoom } from "../models3D/Scene001"
import { Suspense, useEffect, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { Camera } from "../camera/Camera"
import { labelsData } from "@data/labeldata";
import LabelsHtml from "@components/about/LabelsHtml";
import { AnimationModel } from "@components/animations/AnimationModel";
import { useDivRefsStore } from "@store/store-sections";

const About = () => {
  const sectionHeadRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<ThreeOrbitControls | null>(null);
  const divrefheight = useRef<HTMLDivElement>(null)
  const setDivRef = useDivRefsStore((state) => state.setDivRef)

  useEffect(() => {
    if (sectionHeadRef.current) {
      setDivRef('About-Me', sectionHeadRef)
    }
  }, [sectionHeadRef, setDivRef])
  useEffect(() => {
    if (divrefheight.current) {
      setDivRef('divrefheight', divrefheight)
    }
  }, [divrefheight, setDivRef])
  return (
    <div id="About-Me" className="w-full h-screen overflow-x-hidden" ref={sectionHeadRef}>
      <div ref={divrefheight} className="w-full h-screen flex flex-col justify-around items-center">
        <div className="w-full flex flex-row justify-center items-center">
          <h1 className="w-[90%] text-white text-4xl 
          font-bold text-center border-b-2 border-t-2 border-dashed">About</h1>
        </div>
        <div className="w-full h-full">
          <Canvas>
            <Camera />
            <ambientLight
              intensity={1.7}
              color={"#9288FF"}
              position={[0, 6, 5]}
            />
            <directionalLight
              intensity={3}
              color={"#9288FF"}
              position={[1, 6, 10]}
            />
            <Suspense fallback={null}>
              <AnimationModel
                controlsRef={controlsRef}
              >
                <ModelGamerRoom
                  position={[0, 0, 0]}
                  rotation={[1.25, 0, 0]}
                  scale={[10, 10, 10]}
                />
              </AnimationModel>
            </Suspense>
            <OrbitControls
              ref={controlsRef}
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              minAzimuthAngle={-Math.PI / 12}
              maxAzimuthAngle={Math.PI / 12}
              minPolarAngle={Math.PI * 0.3}
              maxPolarAngle={Math.PI * 0.35}
            />
          </Canvas>
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden z-10"
          >
            {labelsData.map((label) => (
              <LabelsHtml id={label.id} label={label} key={label.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
