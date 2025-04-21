import { PerspectiveCamera } from "@react-three/drei";
//import { GUI } from "dat.gui"
//import { useEffect, useState } from "react";

export const Camera = () => {
  return (
    <PerspectiveCamera makeDefault position={[0, 0, 2]} />

  )
}


//position: { x: 0, y: 1.7, z: 1.5 },
// export const Camera = () => {
//   const [transform, setTransform] = useState({
//     position: { x: 0, y: 0.678, z: 3.544 },
//   })
//
//   useEffect(() => {
//     const gui = new GUI()
//     const folder = gui.addFolder('Transformations')
//
//     folder.add(transform.position, "x", -10, 10, 0.002)
//       .name("Pos X")
//       .onFinishChange((value) =>
//         setTransform((prev) => ({
//           ...prev,
//           postition: { ...prev.position, x: value }
//         })),
//       );
//
//     folder.add(transform.position, "y", -10, 10, 0.002)
//       .name("Pos y")
//       .onFinishChange((value) =>
//         setTransform((prev) => ({
//           ...prev,
//           postition: { ...prev.position, y: value }
//         })),
//       );
//
//     folder.add(transform.position, "z", -10, 10, 0.002)
//       .name("Pos z")
//       .onFinishChange((value) =>
//         setTransform((prev) => ({
//           ...prev,
//           postition: { ...prev.position, z: value }
//         })),
//       );
//
//     folder.open()
//
//     return () => gui.destroy();
//   }, [transform])
//   return <PerspectiveCamera makeDefault position={[transform.position.x, transform.position.y, transform.position.z]} />;
// };
