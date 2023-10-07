import * as THREE from "three";
import { useLayoutEffect, useRef } from "react";
import { buildEarthMesh, buildEarthScene } from "./scene";

export const Earth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const { camera, scene, renderer } = buildEarthScene(canvasRef.current);
    const earthMesh = buildEarthMesh();
    scene.add(earthMesh);

    const posInitial = new THREE.Vector3(0, -0.6, 0);
    const posFinal = new THREE.Vector3(-1, 0, -3);
    const posKF = new THREE.VectorKeyframeTrack(
      ".position",
      [0, 1, 2],
      [
        posInitial.x,
        posInitial.y,
        posInitial.z,
        posFinal.x,
        posFinal.y,
        posFinal.z,
        posInitial.x,
        posInitial.y,
        posInitial.z,
      ]
    );
    const qInitial = earthMesh.quaternion;
    const qFinal = qInitial.clone().rotateTowards(new THREE.Quaternion(), 3.0);
    const qKF = new THREE.QuaternionKeyframeTrack(
      ".quaternion",
      [0, 1, 2],
      [
        qInitial.x,
        qInitial.y,
        qInitial.z,
        qInitial.w,
        qFinal.x,
        qFinal.y,
        qFinal.z,
        qFinal.w,
        qInitial.x,
        qInitial.y,
        qInitial.z,
        qInitial.w,
      ]
    );

    const clip = new THREE.AnimationClip("default", 3, [posKF, qKF]);
    const mixer = new THREE.AnimationMixer(earthMesh);
    const clipAction = mixer.clipAction(clip);
    clipAction.play();

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      earthMesh.rotation.y -= 0.0006;
      render();
    };

    // Rendering

    const render = () => {
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      style={{ display: "block", width: "100%", height: "100%" }}
      ref={canvasRef}
    />
  );
};
