"use client";

import { Dispatch, SetStateAction, createContext } from "react";

export interface StoreInterface {
  sidebarCollapsed: boolean;
}

export const StoreContext = createContext<{
  store: Partial<StoreInterface>;
  setStore: Dispatch<SetStateAction<Partial<StoreInterface>>>;
}>({
  store: {},
  setStore: () => null,
});
