"use client";

import { createContext, useContext, useRef } from "react";
import { sajuStore, type UserState } from "@/store/sajuStore";
import { useStore } from "zustand";

export type StoreApi = ReturnType<typeof sajuStore>;
export const storeContext = createContext<StoreApi | undefined>(undefined);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<StoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = sajuStore();
  }
  return (
    <storeContext.Provider value={storeRef.current}>
      {children}
    </storeContext.Provider>
  );
};

export const useSajuStore = <T,>(selector: (store: UserState) => T): T => {
  const sajuStoreContext = useContext(storeContext);
  if (!sajuStoreContext) {
    throw new Error(`useSajuStore must be used within SajuStoreProvider`);
  }
  return useStore(sajuStoreContext, selector);
};
