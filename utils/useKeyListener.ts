import { useEffect } from "react";

export const useKeyDown = (code: string, handler: (...params: any) => unknown, deps = []) => {
    const handleKey = (e: KeyboardEvent) => {
        if(e.code === code) {
            handler()
        }
    }
    useEffect(() => {
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("keydown", handleKey);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handler, ...deps]);
  };