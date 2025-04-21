import * as THREE from "three"
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";


type AnimationData = {
  objectToAnimate: GSAPTweenTarget; // Objeto a animar
  properties: GSAPTweenVars; // Propiedades de la animación
};

type TimelineProps = {
  modelRef: THREE.Group | null;
  timeline: GSAPTimeline
  camera: THREE.PerspectiveCamera
  labelsrefs: { [key: string]: React.RefObject<HTMLElement | null> }
  animatedTarget: THREE.Vector3
  controlsRef: ThreeOrbitControls | null;

};
export function ArrayAnimations({
  modelRef,
  timeline,
  camera,
  labelsrefs,
  animatedTarget,
  controlsRef
}: TimelineProps) {

  if (!modelRef) return;
  const AnimationsData: AnimationData[] = [
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: Math.PI * -0.001,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 4.3,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },
    {
      objectToAnimate: labelsrefs["label_01"].current,
      properties: {
        opacity: 1,
        duration: 1,
        y: 100,
        ease: "power4.in",
      },
    },
    {
      objectToAnimate: labelsrefs["label_01"].current,
      properties: {
        opacity: 0,
        duration: 1,
        y: 0,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: animatedTarget,
      properties: {
        x: 0.1,
        y: 0.6,
        z: 0,
        duration: 1,
        ease: "power2.in",
        onUpdate: () => {
          controlsRef?.target.copy(animatedTarget);
          controlsRef?.update();
        },
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 9,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },
    {
      objectToAnimate: labelsrefs["label_02"].current,
      properties: {
        opacity: 1,
        duration: 1,
        y: 100,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: labelsrefs["label_02"].current,
      properties: {
        opacity: 0,
        duration: 1,
        y: 0,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 7,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: 0,
        y: Math.PI * 0.55,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: modelRef.position as THREE.Vector3,
      properties: {
        x: 0,
        y: 0.3,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: labelsrefs["label_03"].current,
      properties: {
        opacity: 1,
        duration: 1,
        y: 100,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: labelsrefs["label_03"].current,
      properties: {
        opacity: 0,
        duration: 1,
        y: 0,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 4,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: 0,
        y: Math.PI * 0.1,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: labelsrefs["label_04"].current,
      properties: {
        opacity: 1,
        duration: 1,
        y: 100,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: labelsrefs["label_04"].current,
      properties: {
        opacity: 0,
        duration: 1,
        y: 0,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 2,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: 0,
        y: Math.PI * 0.4,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: labelsrefs["label_05"].current,
      properties: {
        opacity: 1,
        duration: 1,
        y: 100,
        ease: "power3.in",
      },
    },

    {
      objectToAnimate: labelsrefs["label_05"].current,
      properties: {
        opacity: 0,
        duration: 1,
        y: 0,
        ease: "power3.in",
      },
    },
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: 0,
        y: Math.PI * 0.4,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: Math.PI * 0.3,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 0.5,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
    },

  ]

  AnimationsData.forEach(({ objectToAnimate, properties }) => {
    timeline.to(objectToAnimate, properties); // Configura las animaciones
  });

}
