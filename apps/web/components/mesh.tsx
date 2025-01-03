import {extend} from "@react-three/fiber";
import {PlaneMaterial} from "./material";

extend({ PlaneMaterial });

export default function Mesh(): JSX.Element {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 200, 200]} />
      {/* @ts-expect-errors expect errors */}
      <planeMaterial />
    </mesh>
  );
}
