import { PropsWithChildren, createContext, useContext } from "react";
import * as THREE from "three";

import MapTexture from "../assets/textures/earth_day_clouds.jpg"
import BumpMapTexture from "../assets/textures/earth_elevation.png"
import SpecularMapTexture from "../assets/textures/specularmap.jpg"

type TexturesContextValue = {
  loadingManager: THREE.LoadingManager;
  textures: {
    mapTexture: THREE.Texture;
    bumpMapTexture: THREE.Texture;
    specularMapTexture: THREE.Texture;
  };
};

export type Textures = TexturesContextValue["textures"];

export const TexturesContext = createContext<TexturesContextValue | undefined>(
  undefined
);

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

export const TexturesProvider = ({ children }: PropsWithChildren) => {
  return (
    <TexturesContext.Provider
      value={{
        loadingManager,
        textures: {
          mapTexture: textureLoader.load(MapTexture),
          bumpMapTexture: textureLoader.load(BumpMapTexture),
          specularMapTexture: textureLoader.load(SpecularMapTexture),
        },
      }}
    >
      {children}
    </TexturesContext.Provider>
  );
};

export const useTextures = () => {
  const context = useContext(TexturesContext);

  if (!context) {
    throw new Error("useTexture() must be used within <TexturesProvider />");
  }

  return context!;
};
