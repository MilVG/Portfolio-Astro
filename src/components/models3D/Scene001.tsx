import * as THREE from "three";
import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useModelStore } from "@store/store";
import type { GLTF } from "three-stdlib";

type ActionName = "Armature.003|Armature.003Action.001";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Room_Floor_0: THREE.Mesh;
    Room_Wall_0: THREE.Mesh;
    Poster_Poster_0: THREE.Mesh;
    Poster__Plactic_Black_0: THREE.Mesh;
    Cube005_Plactic_White_0: THREE.Mesh;
    Robot_Card_Robot_Cards_0: THREE.Mesh;
    TV_Chrome_0: THREE.Mesh;
    Cube016_Cart_Art_0: THREE.Mesh;
    Master_Sword_Plastic_Blue_0: THREE.Mesh;
    Plane_Screens001_0: THREE.Mesh;
    Sofa_Sofe_Blue_0: THREE.Mesh;
    Ramen_Ramen_0: THREE.Mesh;
    n64_controller001_phong4_0: THREE.Mesh;
    n64_phong1_0: THREE.Mesh;
    city_Material__243_0: THREE.Mesh;
    city_Material__278_0: THREE.Mesh;
    city_Material__277_0: THREE.Mesh;
    city_Material__279_0: THREE.Mesh;
    city_Material__281_0: THREE.Mesh;
    city_Material__237_0: THREE.Mesh;
    city_Material__221_0: THREE.Mesh;
    city_Material__276_0: THREE.Mesh;
    city_Material__274_0: THREE.Mesh;
    city_Material__289_0: THREE.Mesh;
    city_Material__209_0: THREE.Mesh;
    city_Material__288_0: THREE.Mesh;
    city_Material__215_0: THREE.Mesh;
    city_Material__216_0: THREE.Mesh;
    city_Material__236_0: THREE.Mesh;
    city_Material__232_0: THREE.Mesh;
    city_Material__248_0: THREE.Mesh;
    city_Material__253_0: THREE.Mesh;
    city_Material__262_0: THREE.Mesh;
    city_Material__255_0: THREE.Mesh;
    city_Material__241_0: THREE.Mesh;
    city_Material__239_0: THREE.Mesh;
    city_Material__291_0: THREE.Mesh;
    city_Material__273_0: THREE.Mesh;
    city_Material__208_0: THREE.Mesh;
    city_Material__212_0: THREE.Mesh;
    city_Material__217_0: THREE.Mesh;
    city_Material__219_0: THREE.Mesh;
    Rak_Buku_Atas_Rak_Buku_Atas_0: THREE.Mesh;
    crate_Material15_0: THREE.Mesh;
    crate_Material16_0: THREE.Mesh;
    superstarShape_superstar_body_mt_0: THREE.Mesh;
    can__mTool_mTool_0: THREE.Mesh;
    Poster001_Poster001_0: THREE.Mesh;
    ["2_Material67_0"]: THREE.Mesh;
    flower_Material__453_0: THREE.Mesh;
    flower_Material__454_0: THREE.Mesh;
    Cube003_BOX_0: THREE.Mesh;
    polygon0001_AGB_Mat0_0: THREE.Mesh;
    ["letter_inside_geom-03E69DB5_material-014860C3_0"]: THREE.Mesh;
    deck_deckBox_002_0: THREE.Mesh;
    ["Pok��mon_Center_gs_pc_b_0"]: THREE.Mesh;
    ["Pok��mon_Center_h_kage_0"]: THREE.Mesh;
    ["Pok��mon_Center_gs_pc_a__0"]: THREE.Mesh;
    Object_694: THREE.SkinnedMesh;
    Object_696: THREE.SkinnedMesh;
    Object_698: THREE.SkinnedMesh;
    Object_714: THREE.SkinnedMesh;
    Object_716: THREE.SkinnedMesh;
    Object_733: THREE.SkinnedMesh;
    Object_735: THREE.SkinnedMesh;
    Object_737: THREE.SkinnedMesh;
    Object_739: THREE.SkinnedMesh;
    Object_741: THREE.SkinnedMesh;
    Object_780: THREE.SkinnedMesh;
    Object_788: THREE.SkinnedMesh;
    Object_790: THREE.SkinnedMesh;
    Object_792: THREE.SkinnedMesh;
    Object_794: THREE.SkinnedMesh;
    Object_963: THREE.SkinnedMesh;
    Object_1112: THREE.SkinnedMesh;
    Object_1136: THREE.SkinnedMesh;
    Object_1138: THREE.SkinnedMesh;
    Object_1140: THREE.SkinnedMesh;
    Object_1142: THREE.SkinnedMesh;
    Object_1155: THREE.SkinnedMesh;
    Object_1163: THREE.SkinnedMesh;
    Object_1208: THREE.SkinnedMesh;
    Object_1209: THREE.SkinnedMesh;
    Object_1210: THREE.SkinnedMesh;
    Object_1211: THREE.SkinnedMesh;
    Object_273: THREE.SkinnedMesh;
    Object_274: THREE.SkinnedMesh;
    Object_275: THREE.SkinnedMesh;
    Object_305: THREE.SkinnedMesh;
    Object_306: THREE.SkinnedMesh;
    Object_307: THREE.SkinnedMesh;
    Object_337: THREE.SkinnedMesh;
    Object_338: THREE.SkinnedMesh;
    Object_339: THREE.SkinnedMesh;
    Object_340: THREE.SkinnedMesh;
    Object_474: THREE.SkinnedMesh;
    Object_475: THREE.SkinnedMesh;
    Object_541: THREE.SkinnedMesh;
    Object_543: THREE.SkinnedMesh;
    Object_545: THREE.SkinnedMesh;
    Object_547: THREE.SkinnedMesh;
    Object_549: THREE.SkinnedMesh;
    Object_634: THREE.SkinnedMesh;
    Object_636: THREE.SkinnedMesh;
    Object_638: THREE.SkinnedMesh;
    Object_640: THREE.SkinnedMesh;
    Object_642: THREE.SkinnedMesh;
    Object_644: THREE.SkinnedMesh;
    Object_646: THREE.SkinnedMesh;
    Object_648: THREE.SkinnedMesh;
    Object_650: THREE.SkinnedMesh;
    Object_652: THREE.SkinnedMesh;
    Object_654: THREE.SkinnedMesh;
    Object_766: THREE.SkinnedMesh;
    Object_768: THREE.SkinnedMesh;
    Object_863: THREE.SkinnedMesh;
    Object_865: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
    _rootJoint_1: THREE.Bone;
    _rootJoint_2: THREE.Bone;
    _rootJoint_3: THREE.Bone;
    _rootJoint_4: THREE.Bone;
    _rootJoint_5: THREE.Bone;
    _rootJoint_6: THREE.Bone;
    _rootJoint_7: THREE.Bone;
    _rootJoint_8: THREE.Bone;
    _rootJoint_9: THREE.Bone;
    _rootJoint_10: THREE.Bone;
    _rootJoint_11: THREE.Bone;
    _rootJoint_12: THREE.Bone;
    _rootJoint_13: THREE.Bone;
    _rootJoint_14: THREE.Bone;
    _rootJoint_15: THREE.Bone;
    _rootJoint_16: THREE.Bone;
    _rootJoint_17: THREE.Bone;
    _rootJoint_18: THREE.Bone;
  };
  materials: {
    Box_PunchOut: THREE.MeshStandardMaterial;
    Merged_materials: THREE.MeshStandardMaterial;
    Poster: THREE.MeshStandardMaterial;
    Plactic_Black: THREE.MeshStandardMaterial;
    Plactic_White: THREE.MeshStandardMaterial;
    Box_PunchOut_0: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    Box_PunchOut_1: THREE.MeshStandardMaterial;
    Plastic_Blue: THREE.MeshStandardMaterial;
    Screens: THREE.MeshStandardMaterial;
    Sofe_Blue: THREE.MeshStandardMaterial;
    Box_PunchOut_2: THREE.MeshStandardMaterial;
    phong4: THREE.MeshStandardMaterial;
    phong1: THREE.MeshStandardMaterial;
    Material__209: THREE.MeshStandardMaterial;
    Material__209_0: THREE.MeshStandardMaterial;
    Material__209_1: THREE.MeshStandardMaterial;
    Material__209_2: THREE.MeshStandardMaterial;
    Material__209_3: THREE.MeshStandardMaterial;
    Material__209_4: THREE.MeshStandardMaterial;
    Material__209_5: THREE.MeshStandardMaterial;
    Material__209_6: THREE.MeshStandardMaterial;
    Material__209_7: THREE.MeshStandardMaterial;
    Material__289: THREE.MeshStandardMaterial;
    Material__209_8: THREE.MeshStandardMaterial;
    Material__209_9: THREE.MeshStandardMaterial;
    Material__209_10: THREE.MeshStandardMaterial;
    Material__209_11: THREE.MeshStandardMaterial;
    Material__209_12: THREE.MeshStandardMaterial;
    Material__209_13: THREE.MeshStandardMaterial;
    Material__209_14: THREE.MeshStandardMaterial;
    Material__209_15: THREE.MeshStandardMaterial;
    Material__209_16: THREE.MeshStandardMaterial;
    Material__209_17: THREE.MeshStandardMaterial;
    Material__209_18: THREE.MeshStandardMaterial;
    Material__209_19: THREE.MeshStandardMaterial;
    Material__209_20: THREE.MeshStandardMaterial;
    Material__209_21: THREE.MeshStandardMaterial;
    Material__209_22: THREE.MeshStandardMaterial;
    Material__209_23: THREE.MeshStandardMaterial;
    Material__209_24: THREE.MeshStandardMaterial;
    Material__209_25: THREE.MeshStandardMaterial;
    Rak_Buku_Atas: THREE.MeshStandardMaterial;
    Material15: THREE.MeshStandardMaterial;
    Material15_0: THREE.MeshStandardMaterial;
    Mt_Dice00_15: THREE.MeshStandardMaterial;
    Mt_Dice00_16: THREE.MeshStandardMaterial;
    Poster_0: THREE.MeshStandardMaterial;
    Material67: THREE.MeshStandardMaterial;
    Material__209_26: THREE.MeshStandardMaterial;
    Material__209_27: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    AGB_Mat0: THREE.MeshStandardMaterial;
    ["material-014860C3"]: THREE.MeshStandardMaterial;
    Box_PunchOut_9: THREE.MeshStandardMaterial;
    gs_pc_b: THREE.MeshStandardMaterial;
    h_kage: THREE.MeshStandardMaterial;
    gs_pc_b_0: THREE.MeshStandardMaterial;
    powderblock_mt: THREE.MeshStandardMaterial;
    Mt_Dice00_17: THREE.MeshStandardMaterial;
    Mt_Dice00_18: THREE.MeshStandardMaterial;
    Mt_Dice00_20: THREE.MeshStandardMaterial;
    Mt_Dice00_21: THREE.MeshStandardMaterial;
    Mt_Dice00_22: THREE.MeshStandardMaterial;
    Mt_Dice00_23: THREE.MeshStandardMaterial;
    Mt_Dice00_24: THREE.MeshStandardMaterial;
    Mt_Dice00_27: THREE.MeshStandardMaterial;
    Mt_Dice00_28: THREE.MeshStandardMaterial;
    Box_PunchOut_10: THREE.MeshStandardMaterial;
    Box_PunchOut_11: THREE.MeshStandardMaterial;
    Box_PunchOut_12: THREE.MeshStandardMaterial;
    Box_PunchOut_13: THREE.MeshStandardMaterial;
    ["Material__12.002"]: THREE.MeshStandardMaterial;
    Box_PunchOut_3: THREE.MeshStandardMaterial;
    Box_PunchOut_4: THREE.MeshStandardMaterial;
    ["body.001"]: THREE.MeshStandardMaterial;
    Mt_Dice00: THREE.MeshStandardMaterial;
    Mt_Dice00_0: THREE.MeshStandardMaterial;
    Mt_Dice00_1: THREE.MeshStandardMaterial;
    Mt_Dice00_2: THREE.MeshStandardMaterial;
    Mt_Dice00_3: THREE.MeshStandardMaterial;
    Mt_Dice00_4: THREE.MeshStandardMaterial;
    Mt_Dice00_5: THREE.MeshStandardMaterial;
    Mt_Dice00_6: THREE.MeshStandardMaterial;
    Box_PunchOut_5: THREE.MeshStandardMaterial;
    Box_PunchOut_6: THREE.MeshStandardMaterial;
    Box_PunchOut_7: THREE.MeshStandardMaterial;
    Box_PunchOut_8: THREE.MeshStandardMaterial;
    Mt_Dice00_7: THREE.MeshStandardMaterial;
    Mt_Dice00_8: THREE.MeshStandardMaterial;
    Mt_Dice00_9: THREE.MeshStandardMaterial;
    Mt_Dice00_10: THREE.MeshStandardMaterial;
    Mt_Dice00_11: THREE.MeshStandardMaterial;
    Mt_Dice00_12: THREE.MeshStandardMaterial;
    Mt_Dice00_13: THREE.MeshStandardMaterial;
    Mt_Dice00_14: THREE.MeshStandardMaterial;
    Mt_Dice00_19: THREE.MeshStandardMaterial;
    Mt_Dice00_25: THREE.MeshStandardMaterial;
    Mt_Dice00_26: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};


export function ModelGamerRoom(props: React.ComponentProps<'group'>) {

  const groupGamerRoom = React.useRef<THREE.Group>(null);

  //refreencia del modelo en un estado global
  const setModelRef = useModelStore((state) => state.setModelRef)

  const { scene, animations } = useGLTF(
    "/model002/modelDraco-transformed-gamer.glb",
  );
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
  useAnimations(animations, groupGamerRoom);



  useEffect(() => {
    if (groupGamerRoom.current) {
      setModelRef(groupGamerRoom.current)
    }
  }, [setModelRef, groupGamerRoom])

  return (
    <group ref={groupGamerRoom} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <primitive object={nodes._rootJoint_1} />
        <primitive object={nodes._rootJoint_2} />
        <primitive object={nodes._rootJoint_3} />
        <primitive object={nodes._rootJoint_4} />
        <primitive object={nodes._rootJoint_5} />
        <primitive object={nodes._rootJoint_6} />
        <primitive object={nodes._rootJoint_7} />
        <primitive object={nodes._rootJoint_8} />
        <primitive object={nodes._rootJoint_9} />
        <primitive object={nodes._rootJoint_10} />
        <primitive object={nodes._rootJoint_11} />
        <primitive object={nodes._rootJoint_12} />
        <primitive object={nodes._rootJoint_13} />
        <primitive object={nodes._rootJoint_14} />
        <primitive object={nodes._rootJoint_15} />
        <primitive object={nodes._rootJoint_16} />
        <primitive object={nodes._rootJoint_17} />
        <primitive object={nodes._rootJoint_18} />
        <mesh
          name="Room_Floor_0"
          geometry={nodes.Room_Floor_0.geometry}
          material={materials.Box_PunchOut}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.038, 0.043, 0.025]}
        />
        <mesh
          name="Room_Wall_0"
          geometry={nodes.Room_Wall_0.geometry}
          material={materials.Merged_materials}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.038, 0.043, 0.025]}
        />
        <mesh
          name="Poster_Poster_0"
          geometry={nodes.Poster_Poster_0.geometry}
          material={materials.Poster}
          position={[-0.028, 0.033, -0.043]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="Poster__Plactic_Black_0"
          geometry={nodes.Poster__Plactic_Black_0.geometry}
          material={materials.Plactic_Black}
          position={[-0.028, 0.033, -0.043]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="Cube005_Plactic_White_0"
          geometry={nodes.Cube005_Plactic_White_0.geometry}
          material={materials.Plactic_White}
          position={[0.033, 0.001, 0.039]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="Robot_Card_Robot_Cards_0"
          geometry={nodes.Robot_Card_Robot_Cards_0.geometry}
          material={materials.Box_PunchOut_0}
          position={[0.033, 0.033, 0.039]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          name="TV_Chrome_0"
          geometry={nodes.TV_Chrome_0.geometry}
          material={materials.Chrome}
          position={[0.032, 0.014, 0.017]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="Cube016_Cart_Art_0"
          geometry={nodes.Cube016_Cart_Art_0.geometry}
          material={materials.Box_PunchOut_1}
          position={[0.028, 0.01, 0.016]}
          rotation={[-Math.PI / 2, 0, -1.396]}
          scale={0.025}
        />
        <mesh
          name="Master_Sword_Plastic_Blue_0"
          geometry={nodes.Master_Sword_Plastic_Blue_0.geometry}
          material={materials.Plastic_Blue}
          position={[0.037, 0.039, 0.023]}
          rotation={[-0.045, 0.01, -1.472]}
          scale={0.036}
        />
        <mesh
          name="Plane_Screens001_0"
          geometry={nodes.Plane_Screens001_0.geometry}
          material={materials.Screens}
          position={[0.009, 0.019, -0.017]}
          rotation={[-Math.PI / 2, 0, -0.131]}
          scale={0.025}
        />
        <mesh
          name="Sofa_Sofe_Blue_0"
          geometry={nodes.Sofa_Sofe_Blue_0.geometry}
          material={materials.Sofe_Blue}
          position={[-0.026, 0, 0.013]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="Ramen_Ramen_0"
          geometry={nodes.Ramen_Ramen_0.geometry}
          material={materials.Box_PunchOut_2}
          position={[-0.02, 0.022, 0.031]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name="n64_controller001_phong4_0"
          geometry={nodes.n64_controller001_phong4_0.geometry}
          material={materials.phong4}
          position={[0.008, 0, 0.009]}
          rotation={[0, 0.118, 0]}
          scale={0}
        />
        <mesh
          name="n64_phong1_0"
          geometry={nodes.n64_phong1_0.geometry}
          material={materials.phong1}
          position={[0.016, 0, 0.011]}
          scale={0}
        />
        <mesh
          name="city_Material__243_0"
          geometry={nodes.city_Material__243_0.geometry}
          material={materials.Material__209}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__278_0"
          geometry={nodes.city_Material__278_0.geometry}
          material={materials.Material__209_0}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__277_0"
          geometry={nodes.city_Material__277_0.geometry}
          material={materials.Material__209_1}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__279_0"
          geometry={nodes.city_Material__279_0.geometry}
          material={materials.Material__209_2}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__281_0"
          geometry={nodes.city_Material__281_0.geometry}
          material={materials.Material__209_3}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__237_0"
          geometry={nodes.city_Material__237_0.geometry}
          material={materials.Material__209_4}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__221_0"
          geometry={nodes.city_Material__221_0.geometry}
          material={materials.Material__209_5}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__276_0"
          geometry={nodes.city_Material__276_0.geometry}
          material={materials.Material__209_6}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__274_0"
          geometry={nodes.city_Material__274_0.geometry}
          material={materials.Material__209_7}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__289_0"
          geometry={nodes.city_Material__289_0.geometry}
          material={materials.Material__289}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__209_0"
          geometry={nodes.city_Material__209_0.geometry}
          material={materials.Material__209_8}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__288_0"
          geometry={nodes.city_Material__288_0.geometry}
          material={materials.Material__209_9}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__215_0"
          geometry={nodes.city_Material__215_0.geometry}
          material={materials.Material__209_10}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__216_0"
          geometry={nodes.city_Material__216_0.geometry}
          material={materials.Material__209_11}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__236_0"
          geometry={nodes.city_Material__236_0.geometry}
          material={materials.Material__209_12}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__232_0"
          geometry={nodes.city_Material__232_0.geometry}
          material={materials.Material__209_13}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__248_0"
          geometry={nodes.city_Material__248_0.geometry}
          material={materials.Material__209_14}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__253_0"
          geometry={nodes.city_Material__253_0.geometry}
          material={materials.Material__209_15}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__262_0"
          geometry={nodes.city_Material__262_0.geometry}
          material={materials.Material__209_16}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__255_0"
          geometry={nodes.city_Material__255_0.geometry}
          material={materials.Material__209_17}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__241_0"
          geometry={nodes.city_Material__241_0.geometry}
          material={materials.Material__209_18}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__239_0"
          geometry={nodes.city_Material__239_0.geometry}
          material={materials.Material__209_19}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__291_0"
          geometry={nodes.city_Material__291_0.geometry}
          material={materials.Material__209_20}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__273_0"
          geometry={nodes.city_Material__273_0.geometry}
          material={materials.Material__209_21}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__208_0"
          geometry={nodes.city_Material__208_0.geometry}
          material={materials.Material__209_22}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__212_0"
          geometry={nodes.city_Material__212_0.geometry}
          material={materials.Material__209_23}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__217_0"
          geometry={nodes.city_Material__217_0.geometry}
          material={materials.Material__209_24}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="city_Material__219_0"
          geometry={nodes.city_Material__219_0.geometry}
          material={materials.Material__209_25}
          position={[-0.009, 0.048, -0.033]}
          scale={0.001}
        />
        <mesh
          name="Rak_Buku_Atas_Rak_Buku_Atas_0"
          geometry={nodes.Rak_Buku_Atas_Rak_Buku_Atas_0.geometry}
          material={materials.Rak_Buku_Atas}
          position={[0.03, 0.052, -0.03]}
          rotation={[0.3, -1.5, -1.25]}
          scale={0.025}
        />
        <mesh
          name="crate_Material15_0"
          geometry={nodes.crate_Material15_0.geometry}
          material={materials.Material15}
          position={[-0.028, 0, -0.037]}
          scale={0.001}
        />
        <mesh
          name="crate_Material16_0"
          geometry={nodes.crate_Material16_0.geometry}
          material={materials.Material15_0}
          position={[-0.028, 0, -0.037]}
          scale={0.001}
        />
        <mesh
          name="superstarShape_superstar_body_mt_0"
          geometry={nodes.superstarShape_superstar_body_mt_0.geometry}
          material={materials.Mt_Dice00_15}
          position={[0.017, 0.056, -0.038]}
          rotation={[-0.433, 1.487, 0.145]}
          scale={0.001}
        />
        <mesh
          name="can__mTool_mTool_0"
          geometry={nodes.can__mTool_mTool_0.geometry}
          material={materials.Mt_Dice00_16}
          position={[-0.003, 0.022, -0.014]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.002, 0.002, 0.002]}
        />
        <mesh
          name="Poster001_Poster001_0"
          geometry={nodes.Poster001_Poster001_0.geometry}
          material={materials.Poster_0}
          position={[0.035, 0.033, -0.019]}
          rotation={[-Math.PI / 2, 0, -1.548]}
          scale={0.019}
        />
        <mesh
          name="2_Material67_0"
          geometry={nodes["2_Material67_0"].geometry}
          material={materials.Material67}
          position={[0.038, 0.045, 0.008]}
          rotation={[-Math.PI, -1.537, -Math.PI]}
          scale={0.003}
        />
        <mesh
          name="flower_Material__453_0"
          geometry={nodes.flower_Material__453_0.geometry}
          material={materials.Material__209_26}
          position={[0.01, 0.043, -0.033]}
          rotation={[0, -0.234, 0]}
          scale={0.016}
        />
        <mesh
          name="flower_Material__454_0"
          geometry={nodes.flower_Material__454_0.geometry}
          material={materials.Material__209_27}
          position={[0.01, 0.043, -0.033]}
          rotation={[0, -0.234, 0]}
          scale={0.016}
        />
        <mesh
          name="Cube003_BOX_0"
          geometry={nodes.Cube003_BOX_0.geometry}
          material={materials.material}
          position={[0.024, 0.046, -0.033]}
          rotation={[-Math.PI / 2, 0, -2.021]}
          scale={0.066}
        />
        <mesh
          name="polygon0001_AGB_Mat0_0"
          geometry={nodes.polygon0001_AGB_Mat0_0.geometry}
          material={materials.AGB_Mat0}
          position={[-0.019, 0.021, -0.006]}
          rotation={[0, -0.862, 0]}
          scale={0}
        />
        <mesh
          name="letter_inside_geom-03E69DB5_material-014860C3_0"
          geometry={
            nodes["letter_inside_geom-03E69DB5_material-014860C3_0"].geometry
          }
          material={materials["material-014860C3"]}
          position={[0.026, 0.037, -0.033]}
          rotation={[0, -0.115, 0]}
          scale={0.011}
        />
        <mesh
          name="deck_deckBox_002_0"
          geometry={nodes.deck_deckBox_002_0.geometry}
          material={materials.Box_PunchOut_9}
          position={[-0.009, 0.025, -0.035]}
          rotation={[-Math.PI / 2, 0, 3.065]}
          scale={0.002}
        />
        <mesh
          name="Pok��mon_Center_gs_pc_b_0"
          geometry={nodes["Pok��mon_Center_gs_pc_b_0"].geometry}
          material={materials.gs_pc_b}
          position={[0.026, 0.025, -0.034]}
          rotation={[0, 0.209, 0]}
          scale={0}
        />
        <mesh
          name="Pok��mon_Center_h_kage_0"
          geometry={nodes["Pok��mon_Center_h_kage_0"].geometry}
          material={materials.h_kage}
          position={[0.026, 0.025, -0.034]}
          rotation={[0, 0.209, 0]}
          scale={0}
        />
        <mesh
          name="Pok��mon_Center_gs_pc_a__0"
          geometry={nodes["Pok��mon_Center_gs_pc_a__0"].geometry}
          material={materials.gs_pc_b_0}
          position={[0.026, 0.025, -0.034]}
          rotation={[0, 0.209, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_694"
          geometry={nodes.Object_694.geometry}
          material={materials.powderblock_mt}
          skeleton={nodes.Object_694.skeleton}
          position={[0, 0.043, -0.038]}
          rotation={[Math.PI / 2, 0, -1.605]}
          scale={0}
        />
        <skinnedMesh
          name="Object_696"
          geometry={nodes.Object_696.geometry}
          material={materials.powderblock_mt}
          skeleton={nodes.Object_696.skeleton}
          position={[0, 0.043, -0.038]}
          rotation={[Math.PI / 2, 0, -1.605]}
          scale={0}
        />
        <skinnedMesh
          name="Object_698"
          geometry={nodes.Object_698.geometry}
          material={materials.powderblock_mt}
          skeleton={nodes.Object_698.skeleton}
          position={[0, 0.043, -0.038]}
          rotation={[Math.PI / 2, 0, -1.605]}
          scale={0}
        />
        <skinnedMesh
          name="Object_714"
          geometry={nodes.Object_714.geometry}
          material={materials.Mt_Dice00_17}
          skeleton={nodes.Object_714.skeleton}
          position={[0.007, 0.043, -0.033]}
          scale={0}
        />
        <skinnedMesh
          name="Object_716"
          geometry={nodes.Object_716.geometry}
          material={materials.Mt_Dice00_17}
          skeleton={nodes.Object_716.skeleton}
          position={[0.007, 0.043, -0.033]}
          scale={0}
        />
        <skinnedMesh
          name="Object_733"
          geometry={nodes.Object_733.geometry}
          material={materials.Mt_Dice00_18}
          skeleton={nodes.Object_733.skeleton}
          position={[0, 0.073, 0]}
          rotation={[0.016, 0.725, -0.006]}
          scale={0}
        />
        <skinnedMesh
          name="Object_735"
          geometry={nodes.Object_735.geometry}
          material={materials.Mt_Dice00_18}
          skeleton={nodes.Object_735.skeleton}
          position={[0, 0.073, 0]}
          rotation={[0.016, 0.725, -0.006]}
          scale={0}
        />
        <skinnedMesh
          name="Object_737"
          geometry={nodes.Object_737.geometry}
          material={materials.Mt_Dice00_18}
          skeleton={nodes.Object_737.skeleton}
          position={[0, 0.073, 0]}
          rotation={[0.016, 0.725, -0.006]}
          scale={0}
        />
        <skinnedMesh
          name="Object_739"
          geometry={nodes.Object_739.geometry}
          material={materials.Mt_Dice00_18}
          skeleton={nodes.Object_739.skeleton}
          position={[0, 0.073, 0]}
          rotation={[0.016, 0.725, -0.006]}
          scale={0}
        />
        <skinnedMesh
          name="Object_741"
          geometry={nodes.Object_741.geometry}
          material={materials.Mt_Dice00_18}
          skeleton={nodes.Object_741.skeleton}
          position={[0, 0.073, 0]}
          rotation={[0.016, 0.725, -0.006]}
          scale={0}
        />
        <skinnedMesh
          name="Object_780"
          geometry={nodes.Object_780.geometry}
          material={materials.Mt_Dice00_20}
          skeleton={nodes.Object_780.skeleton}
          position={[0.033, 0.043, 0.04]}
          scale={[-0.001, 0.001, 0.001]}
        />
        <skinnedMesh
          name="Object_788"
          geometry={nodes.Object_788.geometry}
          material={materials.Mt_Dice00_21}
          skeleton={nodes.Object_788.skeleton}
          position={[0.026, 0.014, 0.037]}
          rotation={[-2.488, -1.074, -2.516]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_790"
          geometry={nodes.Object_790.geometry}
          material={materials.Mt_Dice00_22}
          skeleton={nodes.Object_790.skeleton}
          position={[0.026, 0.014, 0.037]}
          rotation={[-2.488, -1.074, -2.516]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_792"
          geometry={nodes.Object_792.geometry}
          material={materials.Mt_Dice00_23}
          skeleton={nodes.Object_792.skeleton}
          position={[0.026, 0.014, 0.037]}
          rotation={[-2.488, -1.074, -2.516]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_794"
          geometry={nodes.Object_794.geometry}
          material={materials.Mt_Dice00_24}
          skeleton={nodes.Object_794.skeleton}
          position={[0.026, 0.014, 0.037]}
          rotation={[-2.488, -1.074, -2.516]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_963"
          geometry={nodes.Object_963.geometry}
          material={materials.Mt_Dice00_27}
          skeleton={nodes.Object_963.skeleton}
          position={[-0.005, 0.037, -0.033]}
          rotation={[0, -0.921, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_1112"
          geometry={nodes.Object_1112.geometry}
          material={materials.Box_PunchOut_9}
          skeleton={nodes.Object_1112.skeleton}
          position={[-0.01, 0.027, -0.031]}
          rotation={[-Math.PI / 2, 0, -3.02]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_1136"
          geometry={nodes.Object_1136.geometry}
          material={materials.Box_PunchOut_9}
          skeleton={nodes.Object_1136.skeleton}
          position={[-0.009, 0.025, -0.03]}
          rotation={[-Math.PI / 2, 0, -3.02]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_1138"
          geometry={nodes.Object_1138.geometry}
          material={materials.Box_PunchOut_9}
          skeleton={nodes.Object_1138.skeleton}
          position={[-0.009, 0.025, -0.03]}
          rotation={[-Math.PI / 2, 0, -3.02]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_1140"
          geometry={nodes.Object_1140.geometry}
          material={materials.Box_PunchOut_9}
          skeleton={nodes.Object_1140.skeleton}
          position={[-0.009, 0.025, -0.03]}
          rotation={[-Math.PI / 2, 0, -3.02]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_1142"
          geometry={nodes.Object_1142.geometry}
          material={materials.Box_PunchOut_9}
          skeleton={nodes.Object_1142.skeleton}
          position={[-0.009, 0.025, -0.03]}
          rotation={[-Math.PI / 2, 0, -3.02]}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_1155"
          geometry={nodes.Object_1155.geometry}
          material={materials.Mt_Dice00_28}
          skeleton={nodes.Object_1155.skeleton}
          position={[-0.003, 0.025, -0.036]}
          rotation={[Math.PI / 2, 0, 2.405]}
          scale={0}
        />
        <skinnedMesh
          name="Object_1163"
          geometry={nodes.Object_1163.geometry}
          material={materials.Mt_Dice00_28}
          skeleton={nodes.Object_1163.skeleton}
          position={[-0.001, 0.025, -0.035]}
          rotation={[Math.PI / 2, 0, 0.194]}
          scale={0}
        />
        <skinnedMesh
          name="Object_1208"
          geometry={nodes.Object_1208.geometry}
          material={materials.Box_PunchOut_10}
          skeleton={nodes.Object_1208.skeleton}
          position={[0.014, 0.025, -0.035]}
          rotation={[0, -0.579, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_1209"
          geometry={nodes.Object_1209.geometry}
          material={materials.Box_PunchOut_11}
          skeleton={nodes.Object_1209.skeleton}
          position={[0.014, 0.025, -0.035]}
          rotation={[0, -0.579, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_1210"
          geometry={nodes.Object_1210.geometry}
          material={materials.Box_PunchOut_12}
          skeleton={nodes.Object_1210.skeleton}
          position={[0.014, 0.025, -0.035]}
          rotation={[0, -0.579, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_1211"
          geometry={nodes.Object_1211.geometry}
          material={materials.Box_PunchOut_13}
          skeleton={nodes.Object_1211.skeleton}
          position={[0.014, 0.025, -0.035]}
          rotation={[0, -0.579, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_273"
          geometry={nodes.Object_273.geometry}
          material={materials["Material__12.002"]}
          skeleton={nodes.Object_273.skeleton}
          position={[-0.026, 0.012, 0.006]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_274"
          geometry={nodes.Object_274.geometry}
          material={materials.Box_PunchOut_3}
          skeleton={nodes.Object_274.skeleton}
          position={[-0.026, 0.012, 0.006]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_275"
          geometry={nodes.Object_275.geometry}
          material={materials.Box_PunchOut_4}
          skeleton={nodes.Object_275.skeleton}
          position={[-0.026, 0.012, 0.006]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
        />
        <skinnedMesh
          name="Object_305"
          geometry={nodes.Object_305.geometry}
          material={materials["body.001"]}
          skeleton={nodes.Object_305.skeleton}
          position={[0.01, 0.01, -0.004]}
          rotation={[Math.PI, -0.875, Math.PI]}
          scale={0.035}
        />
        <skinnedMesh
          name="Object_306"
          geometry={nodes.Object_306.geometry}
          material={materials.Mt_Dice00}
          skeleton={nodes.Object_306.skeleton}
          position={[0.01, 0.01, -0.004]}
          rotation={[Math.PI, -0.875, Math.PI]}
          scale={0.035}
        />
        <skinnedMesh
          name="Object_307"
          geometry={nodes.Object_307.geometry}
          material={materials.Mt_Dice00_0}
          skeleton={nodes.Object_307.skeleton}
          position={[0.01, 0.01, -0.004]}
          rotation={[Math.PI, -0.875, Math.PI]}
          scale={0.035}
        />
        <skinnedMesh
          name="Object_337"
          geometry={nodes.Object_337.geometry}
          material={materials.Mt_Dice00_1}
          skeleton={nodes.Object_337.skeleton}
          position={[-0.019, 0.019, 0.023]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_338"
          geometry={nodes.Object_338.geometry}
          material={materials.Mt_Dice00_2}
          skeleton={nodes.Object_338.skeleton}
          position={[-0.019, 0.019, 0.023]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_339"
          geometry={nodes.Object_339.geometry}
          material={materials.Mt_Dice00_3}
          skeleton={nodes.Object_339.skeleton}
          position={[-0.019, 0.019, 0.023]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_340"
          geometry={nodes.Object_340.geometry}
          material={materials.Mt_Dice00_4}
          skeleton={nodes.Object_340.skeleton}
          position={[-0.019, 0.019, 0.023]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_474"
          geometry={nodes.Object_474.geometry}
          material={materials.Mt_Dice00_5}
          skeleton={nodes.Object_474.skeleton}
          position={[-0.009, 0.052, -0.033]}
          rotation={[0, -0.156, 0]}
          scale={0.004}
        />
        <skinnedMesh
          name="Object_475"
          geometry={nodes.Object_475.geometry}
          material={materials.Mt_Dice00_6}
          skeleton={nodes.Object_475.skeleton}
          position={[-0.009, 0.052, -0.033]}
          rotation={[0, -0.156, 0]}
          scale={0.004}
        />
        <skinnedMesh
          name="Object_541"
          geometry={nodes.Object_541.geometry}
          material={materials.Box_PunchOut_5}
          skeleton={nodes.Object_541.skeleton}
          position={[0.003, 0, 0.017]}
          rotation={[-Math.PI, 1.387, Math.PI]}
          scale={0.025}
        />
        <skinnedMesh
          name="Object_543"
          geometry={nodes.Object_543.geometry}
          material={materials.Box_PunchOut_6}
          skeleton={nodes.Object_543.skeleton}
          position={[0.003, 0, 0.017]}
          rotation={[-Math.PI, 1.387, Math.PI]}
          scale={0.025}
        />
        <skinnedMesh
          name="Object_545"
          geometry={nodes.Object_545.geometry}
          material={materials.Box_PunchOut_7}
          skeleton={nodes.Object_545.skeleton}
          position={[0.003, 0, 0.017]}
          rotation={[-Math.PI, 1.387, Math.PI]}
          scale={0.025}
        />
        <skinnedMesh
          name="Object_547"
          geometry={nodes.Object_547.geometry}
          material={materials.Box_PunchOut_8}
          skeleton={nodes.Object_547.skeleton}
          position={[0.003, 0, 0.017]}
          rotation={[-Math.PI, 1.387, Math.PI]}
          scale={0.025}
        />
        <skinnedMesh
          name="Object_549"
          geometry={nodes.Object_549.geometry}
          material={materials.Mt_Dice00_7}
          skeleton={nodes.Object_549.skeleton}
          position={[0.003, 0, 0.017]}
          rotation={[-Math.PI, 1.387, Math.PI]}
          scale={0.025}
        />
        <skinnedMesh
          name="Object_634"
          geometry={nodes.Object_634.geometry}
          material={materials.Mt_Dice00_8}
          skeleton={nodes.Object_634.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_636"
          geometry={nodes.Object_636.geometry}
          material={materials.Mt_Dice00_9}
          skeleton={nodes.Object_636.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_638"
          geometry={nodes.Object_638.geometry}
          material={materials.Mt_Dice00_10}
          skeleton={nodes.Object_638.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_640"
          geometry={nodes.Object_640.geometry}
          material={materials.Mt_Dice00_11}
          skeleton={nodes.Object_640.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_642"
          geometry={nodes.Object_642.geometry}
          material={materials.Mt_Dice00_9}
          skeleton={nodes.Object_642.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_644"
          geometry={nodes.Object_644.geometry}
          material={materials.Mt_Dice00_12}
          skeleton={nodes.Object_644.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_646"
          geometry={nodes.Object_646.geometry}
          material={materials.Mt_Dice00_12}
          skeleton={nodes.Object_646.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_648"
          geometry={nodes.Object_648.geometry}
          material={materials.Mt_Dice00_12}
          skeleton={nodes.Object_648.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_650"
          geometry={nodes.Object_650.geometry}
          material={materials.Mt_Dice00_8}
          skeleton={nodes.Object_650.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_652"
          geometry={nodes.Object_652.geometry}
          material={materials.Mt_Dice00_13}
          skeleton={nodes.Object_652.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_654"
          geometry={nodes.Object_654.geometry}
          material={materials.Mt_Dice00_14}
          skeleton={nodes.Object_654.skeleton}
          position={[0.027, 0.052, -0.033]}
          rotation={[0.007, 0, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_766"
          geometry={nodes.Object_766.geometry}
          material={materials.Mt_Dice00_19}
          skeleton={nodes.Object_766.skeleton}
          position={[0.033, 0.041, -0.006]}
          rotation={[0, -1.537, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_768"
          geometry={nodes.Object_768.geometry}
          material={materials.Mt_Dice00_19}
          skeleton={nodes.Object_768.skeleton}
          position={[0.033, 0.041, -0.006]}
          rotation={[0, -1.537, 0]}
          scale={0.001}
        />
        <skinnedMesh
          name="Object_863"
          geometry={nodes.Object_863.geometry}
          material={materials.Mt_Dice00_25}
          skeleton={nodes.Object_863.skeleton}
          position={[0.014, 0.043, -0.031]}
          scale={0}
        />
        <skinnedMesh
          name="Object_865"
          geometry={nodes.Object_865.geometry}
          material={materials.Mt_Dice00_26}
          skeleton={nodes.Object_865.skeleton}
          position={[0.014, 0.043, -0.031]}
          scale={0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model002/modelDraco-transformed-gamer.glb");
