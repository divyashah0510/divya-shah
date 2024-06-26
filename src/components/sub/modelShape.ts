import Heart from "@/Models/Heart";
import Icosedan from "@/Models/Icosedan";
import Torus from "@/Models/Torus";
import TorusKnot from "@/Models/TorusKnot";

export const modelShape = [
  {
    shape: Torus,
    position: { top: "0%", left: "0%" }, // top-left corner
    fov:62
  },
  {
    shape: Icosedan,
    position: { top: "0%", right: "0%" }, // top-right corner
    fov:42
  },
  {
    shape: Heart,
    position: { bottom: "0%", left: "0%" }, // bottom-left corner
    fov:42
  },
  {
    shape: TorusKnot,
    position: { bottom: "0%", right: "0%" }, // bottom-right corner
    fov:62
  }
//   {
    
//     position: { top: "50%", left: "50%" }, // center
//     fov:42
//   }
];
