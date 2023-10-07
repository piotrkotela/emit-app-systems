import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef } from "react";

export function Earth() {
  const canvasRef = useRef(null);

  useEffect(() => {}, []);

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const fov = 40;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 1.1;
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canvasRef.current!,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.autoClear = false;

    const earthGeometry = new THREE.SphereGeometry(0.6, 120, 120);

    const earthMaterial = new THREE.MeshPhongMaterial({
      shininess: 5000,
      specular: 0x222222,

      map: new THREE.TextureLoader().load("texture/earth_day_clouds.jpg"),
      bumpMap: new THREE.TextureLoader().load("texture/earth_elevation.png"),
      specularMap: new THREE.TextureLoader().load("texture/specularmap.jpg"),
      bumpScale: 0.5,
    });

    camera.layers.enable(1);

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(0, -0.6, 0);
    earthMesh.rotation.set(150, 45, 45);
    earthMesh.layers.set(1);
    scene.add(earthMesh);

    const ambientlight = new THREE.AmbientLight(0xffffff, 3.0);
    ambientlight.layers.set(1);
    scene.add(ambientlight);

    const pointLight = new THREE.PointLight(0xffffff, 50.1);
    pointLight.position.set(7, 2, 0);
    pointLight.layers.set(1);
    scene.add(pointLight);

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
      },
      false
    );

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

    // rendering
    const render = () => {
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}
