const viewportWidth = window.innerWidth + "px";
console.log("ViewportWidth = ", viewportWidth);

const root = document.documentElement;
root.style.setProperty('--viewport-width', viewportWidth);