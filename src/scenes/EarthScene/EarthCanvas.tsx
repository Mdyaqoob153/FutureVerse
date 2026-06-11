import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";

export default function EarthCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      {/* Ambient Light */}
      <ambientLight intensity={1.5} />

      {/* Main Sun Light */}
      <directionalLight
        position={[10, 5, 5]}
        intensity={3}
        color="#ffffff"
      />

      {/* Blue Fill Light */}
      <pointLight
        position={[-5, -5, -5]}
        intensity={1}
        color="#60a5fa"
      />

      {/* Stars */}
      <Stars
        radius={150}
        depth={60}
        count={7000}
        factor={4}
        saturation={0}
        fade
      />

      <Earth />

      <OrbitControls
  enableZoom={false}
  enablePan={false}
/>
    </Canvas>
  );
}