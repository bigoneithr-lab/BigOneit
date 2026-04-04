import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Float, Stars } from "@react-three/drei";

const Hero3DElement = () => {
  return (
    <div className="w-full h-full absolute inset-0 rounded-[2rem] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#d81b60" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere visible args={[1.4, 64, 64]}>
            <MeshDistortMaterial 
              color="#3b82f6" 
              attach="material" 
              distort={0.4} 
              speed={2} 
              roughness={0.2} 
              metalness={0.8}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default Hero3DElement;
