import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const rotationSpeed = useRef(0.002);

  const dayTexture = useTexture(
  "/textures/earth_day.jpg"
);

  useEffect(() => {
    let timeout: number;

    const handleScroll = () => {
      rotationSpeed.current = 0.02;

      clearTimeout(timeout);

      timeout = window.setTimeout(() => {
        rotationSpeed.current = 0.002;
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Earth Rotation
    if (earthRef.current) {
      earthRef.current.rotation.y += rotationSpeed.current;
    }

    // Atmosphere Rotation
    if (glowRef.current) {
      glowRef.current.rotation.y += rotationSpeed.current;
    }

    // Floating Effect
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(time * 0.5) * 0.15;
    }

    // Glow Pulse
    if (glowRef.current) {
      const material =
        glowRef.current.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.12 + Math.sin(time * 2) * 0.015;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[3.3, 0, 0]}
    >
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.65, 128, 128]} />

        <meshStandardMaterial
          map={dayTexture}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.75, 128, 128]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}