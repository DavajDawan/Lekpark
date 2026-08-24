"use client";

import { Loader } from "@react-three/drei";

export function Loading3D() {
  return (
    <Loader
      containerStyles={{ background: "rgba(250, 250, 249, 0.9)" }}
      innerStyles={{ width: "200px" }}
      barStyles={{ background: "#2f6f4e" }}
      dataStyles={{
        color: "#171717",
        fontSize: "12px",
        fontFamily: "inherit",
      }}
      dataInterpolation={(p) => `Laddar modell ${p.toFixed(0)}%`}
    />
  );
}
