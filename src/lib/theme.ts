import { Theme } from "@/types";

export function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return storedTheme || (prefersLight ? "light" : "dark");
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light-theme", theme === "light");
  localStorage.setItem("theme", theme);
}
