import * as THREE from "three";
import { Textures } from "../../context/textures";

/** Creates a new scene, a camera and a renderer. */
export const buildEarthScene = (
  canvas: HTMLCanvasElement
): {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
} => {
  const scene = new THREE.Scene();
  const fov = 30;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.05;
  const far = 1000;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1.8;
  camera.layers.enable(1);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas,
    antialias: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;

  const ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
  ambientLight.layers.set(1);

  const pointLight = new THREE.PointLight(0xffffff, 50.1);
  pointLight.position.set(10, 2, 0);
  pointLight.layers.set(1);

  scene.add(ambientLight);
  scene.add(pointLight);

  return { camera, scene, renderer };
};

/** Creates an earth mesh. */
export const buildEarthMesh = (textures: Textures): THREE.Mesh => {
  const earthGeometry = new THREE.SphereGeometry(0.6, 120, 120);

  const earthMaterial = new THREE.MeshPhongMaterial({
    shininess: 0,
    specular: 0x222222,
    map: textures.mapTexture,
    bumpMap: textures.bumpMapTexture,
    specularMap: textures.specularMapTexture,
    bumpScale: 0.5,
  });

  const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  earthMesh.position.set(0, -0.6, 0);
  earthMesh.rotation.set(150, 45, 45);
  earthMesh.layers.set(1);

  return earthMesh;
};
