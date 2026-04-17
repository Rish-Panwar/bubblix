"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("./Soda-can.gltf");

const flavorTextures = {
  lemon: "./assets/lemon-label.png",
  orange: "./assets/orange-label.png",
  blueBerry: "./assets/blueberry-label.png",
  strawberry: "./assets/strawberry-label.png",
  
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "blueBerry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("./Soda-can.gltf");

  const labels = useTexture(flavorTextures);
  
  // Fixes upside down labels
  labels.strawberry.flipY = false;
  labels.blueBerry.flipY = false;
  labels.orange.flipY = false;
  labels.lemon.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
