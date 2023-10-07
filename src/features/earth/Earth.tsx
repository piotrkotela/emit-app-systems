import * as THREE from "three";
import { useLayoutEffect, useRef } from "react";

export function Earth() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    // scene setup
    const scene = new THREE.Scene();

    // camera setup
    const fov = 40;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 1.1;
    scene.add(camera);

    // renderer setup
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

    // earth geometry
    const earthGeometry = new THREE.SphereGeometry(0.6, 120, 120);

    // earth material
    const earthMaterial = new THREE.MeshPhongMaterial({
      shininess: 5000,
      specular: 0x222222,

      map: new THREE.TextureLoader().load("texture/earth_day_clouds.jpg"),
      bumpMap: new THREE.TextureLoader().load("texture/earth_elevation.png"),
      specularMap: new THREE.TextureLoader().load("texture/specularmap.jpg"),
      bumpScale: 0.5,
    });

    camera.layers.enable(1);

    // earth mesh
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(0, -0.6, 0);
    earthMesh.rotation.set(150, 45, 45);
    earthMesh.layers.set(1);
    scene.add(earthMesh);

    // ambient light
    const ambientlight = new THREE.AmbientLight(0xffffff, 3.0);
    ambientlight.layers.set(1);
    scene.add(ambientlight);

    const pointLight = new THREE.PointLight(0xffffff, 50.1);
    pointLight.position.set(7, 2, 0);
    pointLight.layers.set(1);
    scene.add(pointLight);

    // handling resizing
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

    // spinning animation
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y -= 0.006;

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
