/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export const useOutsiedeClick = (callbackFunction: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    function handleOutclick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!ref.current.contains(target)) {
        callbackFunction();
      }
    }
    document.addEventListener("mousedown", handleOutclick);
    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return ref;
};
