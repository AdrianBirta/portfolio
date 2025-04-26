"use client"
import { useEffect, useState } from "react";

export function useHashMatch(target: string) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const update = () => {
      setMatch(window.location.hash.replace("#", "") === target);
    };

    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [target]);

  return match;
}
