import { create } from "zustand";

// Definir el tipo del store
type TimelineStore = {
  timelineNavigationSection: gsap.core.Timeline | null; // Referencia al timeline
  setTimeline: (tl: gsap.core.Timeline) => void; // Método para establecer el timeline
};

// Crear el store con Zustand
export const useTimelineNavigation = create<TimelineStore>((set) => ({
  timelineNavigationSection: null, // Inicializamos el timeline en null

  // Establecer el timeline
  setTimeline: (tl) => {
    if (!tl) {
      console.error("Error: el timeline no puede ser null");
      return;
    }
    set({ timelineNavigationSection: tl });

  },
}));
