"use client";

import { useGLTF } from "@react-three/drei";

export function ProductModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}
