"use client";

import { Canvas } from "@react-three/fiber";
import { logging } from "@repo/utils";
import Mesh from "../components/mesh";

export default function Page(): JSX.Element {
  logging("Hello world!");

  return (
    <main className="h-screen w-full">
      <Canvas>
        <Mesh />
      </Canvas>
    </main>
  );
}
