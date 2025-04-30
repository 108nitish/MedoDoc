import { create } from "zustand";

export const useStateStore = create((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  showPredictions: false,
  setShowPredictions: (showPredictions) => set({ showPredictions }),
  specialist : "",
  setSpecialist : (specialist) => set({ specialist }),
  doctor: [],
  setDoctor : (doctor) => set({ doctor }),
  disease: [],
  setDisease : (disease) => set({ disease }),
  diseaseInfo : "",
  setDiseaseInfo : (diseaseInfo) => set({ diseaseInfo }),
}));
