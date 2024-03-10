const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  links.classList.toggle("nav__menu--active");
});

// Función para el switch cambie de tema
const switchToggle = document.querySelector(".theme-switch input");

switchToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  saveTheme();
});

const saveTheme = () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Funcion para guardar la preferencia de color en el localStorage
const loadTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    switchToggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark-mode");
    switchToggle.checked = false;
  }
};

loadTheme();