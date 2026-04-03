import { Theme } from "@/types";

export function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem("theme") as Theme | null;

  // Dacă utilizatorul a salvat tema, o folosim
  if (storedTheme === "dark" || storedTheme === "light" || storedTheme === "efermier-light") {
    return storedTheme;
  }

  // Default = dark (eFermier style) – poți schimba dacă vrei
  return "dark";
}

export function applyTheme(theme: Theme) {
  const html = document.documentElement;

  html.classList.remove("light-theme", "efermier-light-theme");

  if (theme === "light") {
    html.classList.add("light-theme");
  } else if (theme === "efermier-light") {
    html.classList.add("efermier-light-theme");
  }
  localStorage.setItem("theme", theme);
}