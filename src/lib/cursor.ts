// src/lib/cursor.ts

export function enableCursorStyle() {
  const cursorShadow = document.querySelector(".cursor-style");
  const links = document.querySelectorAll(".link");

  const handleLinkHover = () => cursorShadow?.classList.add("scale-up");
  const handleLinkLeave = () => cursorShadow?.classList.remove("scale-up");

  links.forEach((link) => {
    link.addEventListener("mouseenter", handleLinkHover);
    link.addEventListener("mouseleave", handleLinkLeave);
  });

  return () => {
    links.forEach((link) => {
      link.removeEventListener("mouseenter", handleLinkHover);
      link.removeEventListener("mouseleave", handleLinkLeave);
    });
  };
}

export function trackCursorMovement(show: boolean) {
  const cursor = document.getElementById("cursor-style");

  const moveCursor = (e: MouseEvent) => {
    if (cursor && show) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  if (show) {
    window.addEventListener("mousemove", moveCursor);
  } else {
    window.removeEventListener("mousemove", moveCursor);
  }

  return () => window.removeEventListener("mousemove", moveCursor);
}
