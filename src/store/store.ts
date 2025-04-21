
import * as THREE from "three";
import { create } from "zustand";

//Definir el tipo del store
type ModelStore = {
  modelRef: THREE.Group | null;
  setModelRef: (ref: THREE.Group | null) => void;
};

// Crear el store con Zustand
export const useModelStore = create<ModelStore>((set) => ({
  modelRef: null, // Inicializamos en null
  setModelRef: (ref) => {
    if (ref === null) {
      console.error('error de Modelo')
      return;
    }
    set({ modelRef: ref })
  },
}));

