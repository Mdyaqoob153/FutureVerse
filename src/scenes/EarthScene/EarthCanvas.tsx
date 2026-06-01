import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";

export default function EarthCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
      />

      <Earth />

      <OrbitControls />
    </Canvas>
  );
}