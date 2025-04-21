import React from 'react';
import { create } from 'zustand';

// Definir el tipo del store
type DivRefsStore = {
  divRefs: { [key: string]: React.RefObject<HTMLDivElement | null> }; // Objeto que almacena las referencias por clave
  setDivRef: (name: string, ref: React.RefObject<HTMLDivElement | null>) => void; // Función para establecer la referencia
};

// Crear el store con Zustand
export const useDivRefsStore = create<DivRefsStore>((set) => ({
  divRefs: {}, // Inicializamos el objeto de referencias vacío
  setDivRef: (name, ref) => {
    set((state) => ({
      divRefs: { ...state.divRefs, [name]: ref }, // Añadimos o actualizamos la referencia bajo la clave proporcionada
    }));
  },
}));
