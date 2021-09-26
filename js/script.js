// window.onload = function() {
//     const themesheet = document.querySelector("#theme-sheet");
//     var a = document.getElementById("theme-home");
//     a.onclick = function() {
//         if (themesheet.getAttribute("href") == "css/style.css") {
//             themesheet.href = "css/style-dark.css";                    
//         } else {
//             themesheet.href = "css/style.css";
//         }
//     }
// };
window.onload = function() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeToggle = document.getElementById("theme-home");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark");
    } else {
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