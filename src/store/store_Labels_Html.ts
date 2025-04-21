import { create } from "zustand"


type LabelsStore = {

  labelsRef: { [key: string]: React.RefObject<HTMLElement | null> }
  addLabelRef: (id: string, ref: React.RefObject<HTMLElement | null>) => void
}

export const useLabelsStore = create<LabelsStore>((set) => ({

  labelsRef: {},
  addLabelRef: (id, ref) =>
    set((state) => ({
      labelsRef: { ...state.labelsRef, [id]: ref }
    }))
}))
