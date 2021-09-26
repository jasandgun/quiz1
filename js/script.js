window.onload = function() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeToggle = document.getElementById("theme-home");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark");
    } else if(currentTheme == "light") {
        document.body.classList.toggle("light");
    }

    themeToggle.onclick = function() {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light");
            var theme = document.body.classList.contains("light")
              ? "light"
              : "dark";
          } else {
            document.body.classList.toggle("dark");
            var theme = document.body.classList.contains("dark")
              ? "dark"
              : "light";
          }
          localStorage.setItem("theme", theme);
    }
}