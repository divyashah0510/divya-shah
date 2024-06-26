// Frames.jsx
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import * as THREE from "three";
import { Frame } from "./Frame";

const GOLDENRATIO = 1.61803398875;
export function Frames({
  // @ts-ignore
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    // @ts-ignore
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      // @ts-ignore
      clicked.current.parent.updateWorldMatrix(true, true);
      // @ts-ignore
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      // @ts-ignore
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [params, p, q]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      // @ts-ignore
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images?.map(
        (props:any) =>
        <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}
