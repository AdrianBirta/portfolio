// src/lib/cursor.ts

export function enableCursorStyle() {
  const cursorStyle = document.querySelector(".cursor-style") as HTMLElement | null;
  const links = document.querySelectorAll(".link");

  const handleLinkHover = () => cursorStyle?.classList.add("scale-up");
  const handleLinkLeave = () => cursorStyle?.classList.remove("scale-up");

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

  const handleMouseDown = () => cursor?.classList.add("mouse-down");
  const handleMouseUp = () => cursor?.classList.remove("mouse-down");

  const moveCursor = (e: MouseEvent) => {
    if (cursor && show) {
      cursor.classList.add("active");
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  const downCursor = (e: MouseEvent) => {
    if (cursor && show) {
      handleMouseDown();
    }
  };

  const upCursor = (e: MouseEvent) => {
    if (cursor && show) {
      handleMouseUp();
    }
  };

  if (show) {
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", downCursor);
    window.addEventListener("mouseup", upCursor);
  } else {
    window.removeEventListener("mousemove", moveCursor);
    window.removeEventListener("mousedown", downCursor);
    window.removeEventListener("mouseup", upCursor);
  }

  return () => {
    window.removeEventListener("mousemove", moveCursor)
    window.removeEventListener("mousedown", downCursor);
    window.removeEventListener("mouseup", upCursor);
  };
}