import * as THREE from "three";
import { useLayoutEffect, useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export function Earth() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    // scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // camera setup
    const fov = 40;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 1;
    scene.add(camera);

    // renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);

    // orbit control setup
    // const controls = new OrbitControls(camera, renderer.domElement);

    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.1;
    bloomPass.radius = 10;
    // renderer.toneMapping = THREE.LinearToneMapping;
    // renderer.toneMappingExposure = 5;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    // earth geometry
    const earthGeometry = new THREE.SphereGeometry(0.6, 120, 120);

    // earth material
    const earthMaterial = new THREE.MeshPhongMaterial({
      shininess: 3000,
      specular: 0x222222,

      map: new THREE.TextureLoader().load("texture/earth_day_clouds.jpg"),
      // bumpMap: new THREE.TextureLoader().load("texture/earth_elevation.png"),
      // specularMap: new THREE.TextureLoader().load("texture/specularmap.jpg"),
      bumpScale: 0.3,
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
    pointLight.position.set(7, 3, 0);
    pointLight.layers.set(1);
    scene.add(pointLight);

    // handling resizing
    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
        render();
      },
      false
    );

    // current fps
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    // spinning animation
    const animate = () => {
      requestAnimationFrame(animate);
      // starMesh.rotation.y -= 0.0015;
      earthMesh.rotation.y -= 0.01;
      // controls.update();
      render();
      stats.update();
      composer.render();
    };

    // rendering
    const render = () => {
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}
