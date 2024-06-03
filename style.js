let sidebar = document.getElementById("sidebar");
let bgfade = document.getElementById("opacity-bg");
let BtnShow = document.getElementById("BtnShow");

let show = false

function showsidebar() {
  show = !show;
  if (show) {
    sidebar.style.right = "0";
    bgfade.style.opacity = "0";
    bgfade.style.opacity = "0.5";
    bgfade.style.display = "block";
  } else {
    sidebar.style.right = "-100%";
    bgfade.style.opacity = "0";
    bgfade.style.display = "none";
  }
};