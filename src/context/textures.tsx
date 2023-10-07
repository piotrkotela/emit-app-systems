import { PropsWithChildren, createContext, useContext } from "react";
import * as THREE from "three";

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
          mapTexture: textureLoader.load("texture/earth_day_clouds.jpg"),
          bumpMapTexture: textureLoader.load("texture/earth_elevation.png"),
          specularMapTexture: textureLoader.load("texture/specularmap.jpg"),
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
