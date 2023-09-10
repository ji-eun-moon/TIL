// store.js
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  selectedButton: null,

  setSelectedButton: (button) => set({ selectedButton: button }),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
}));

export default useStore;
