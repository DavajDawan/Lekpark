"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Loading3D } from "@/components/3d/Loading3D";
import { ProductModel } from "@/components/3d/ProductModel";

export function ProductViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [4, 2.5, 4], fov: 40 }} shadows>
        <color attach="background" args={["#fafaf9"]} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows="contact">
            <ProductModel url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan
          enableZoom
          enableRotate
          minDistance={1}
          maxDistance={20}
        />
      </Canvas>
      <Loading3D />
    </div>
  );
}
