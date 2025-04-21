import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { useModelStore } from "@store/store";
import { useLabelsStore } from "@store/store_Labels_Html";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import { ArrayAnimations } from "@data/animations";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";
import { useDivRefsStore } from "@store/store-sections";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.RefObject<ThreeOrbitControls | null>;
}


export const AnimationModel = ({ children, controlsRef }: AnimationWrapperProps) => {

  const { camera } = useThree<{ camera: THREE.PerspectiveCamera }>();
  const groupRef = useRef<THREE.Group>(null);
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));
  const modelRef = useModelStore((state) => state.modelRef);
  const labelsrefs = useLabelsStore((state) => state.labelsRef);

  const setTimeline = useTimelineStore((state) => state.setTimeline)
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs)

  const aboutRef = sectionsDivRef['About-Me']
  const divrefheight = sectionsDivRef['divrefheight']

  useGSAP(() => {
    if (!modelRef) return
    controlsRef.current?.target.set(0, 0, 0);
    controlsRef.current?.update();
    const timelineScene = gsap.timeline({
      scrollTrigger: {
        trigger: divrefheight.current,
        start: "top top",
        end: () => {
          return "bottom+=500%" + " " + "center"
        },
        endTrigger: divrefheight.current,
        scrub: 3,
        pin: aboutRef.current,
        id: "model3d",
      },
      onStart: () => {
        ScrollTrigger.getById("navigation")?.refresh()
        ScrollTrigger.getById("horizontalsctoll")?.refresh()
      },
      onComplete: () => {
        ScrollTrigger.getById("navigation")?.refresh()
        ScrollTrigger.getById("horizontalsctoll")?.refresh()
      }
    });

    ArrayAnimations({
      modelRef: modelRef,
      timeline: timelineScene,
      camera: camera,
      labelsrefs: labelsrefs,
      animatedTarget: animatedTarget.current,
      controlsRef: controlsRef.current
    });
    setTimeline(timelineScene)
  }, { dependencies: [modelRef, setTimeline] })

  return <group ref={groupRef}>{children}</group>;
};
