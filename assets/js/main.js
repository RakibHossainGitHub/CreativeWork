 const userPrefersDark =
   window.matchMedia &&
   window.matchMedia("(prefers-color-scheme: dark)").matches;
 if (localStorage.getItem("dark-theme") || userPrefersDark) {
   document.body.classList.add("dark-theme");
 }

let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark-theme", "enabled");
    icon.src = "assets/main-img/dark-theme-icon/sun-regular.svg";
  } else {
    localStorage.removeItem("dark-theme");
    icon.src = "assets/main-img/dark-theme-icon/moon-solid.svg";
  }
};
