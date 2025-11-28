const viewportWidth = window.innerWidth + "px";
console.log("ViewportWidth = ", viewportWidth);

const root = document.documentElement;
root.style.setProperty('--viewport-width', viewportWidth);

const pageUrl = window.location.pathname;
const pageName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);
console.log(pageName);