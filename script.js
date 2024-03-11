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

const saveTheme = async () => {
  document.documentElement.classList.contains("dark-mode")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};



// Funcion para cargar la preferencia de color en el localStorage asíncronamente
const loadTheme = async () => {
  try {
    const darkTheme = await new Promise((resolve) => {
      const storedTheme = localStorage.getItem("theme");
      resolve(storedTheme);
    });

    if (darkTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      switchToggle.checked = true;
    } else {
      document.documentElement.classList.remove("dark-mode");
      switchToggle.checked = false;
    }
  } catch (error) {
    console.error("Error loading theme:", error);
  }
};

loadTheme();
