import React from "react";
import create from "zustand";

type Store = {
  index: any;
  increaseIndex: () => any;
  decreaseIndex: () => any;
};

const useStore = create<Store>((set) => ({
  index: 0,
  increaseIndex: () => set((state) => ({ index: state.index + 1 })),
  decreaseIndex: () => set((state) => ({ index: state.index - 1 })),
}));

export { useStore };
