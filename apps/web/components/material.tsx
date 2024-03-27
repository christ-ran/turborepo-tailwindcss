import { shaderMaterial } from "@react-three/drei";
import vertex from "../shaders/vertext.glsl";
import fragment from "../shaders/fragment.glsl";

export const PlaneMaterial = shaderMaterial({}, vertex, fragment);
