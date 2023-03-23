export const setNewCoordForDot = (dot: HTMLElement, x: number, y: number) => {
    dot.style.top =
    +getComputedStyle(dot).top.replace("px", "") - x + "px";
  dot.style.left =
    +getComputedStyle(dot).left.replace("px", "") - y + "px";
}