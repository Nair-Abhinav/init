"use client";
import { create } from "zustand";

const defaultValues = {
  isOpen: false,
};

const useSliderToggler = create((set) => ({
  isOpen: true,
  setIsOpen: (isOpen:boolean) => {
    set({ isOpen });
  },
  expanded: () => {
    const storedOpen = localStorage.getItem("sidebarOpen");
    return storedOpen ? JSON.parse(storedOpen) : false;
  },
  setExpanded: (expanded: any) => {
    localStorage.setItem("sidebarOpen", JSON.stringify(expanded));
    set({ expanded });
  },
}));

export default useSliderToggler;