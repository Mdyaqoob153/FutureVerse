import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}