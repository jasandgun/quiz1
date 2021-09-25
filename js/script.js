window.onload = function() {
    const themesheet = document.querySelector("#theme-sheet");
    var a = document.getElementById("theme-home");
    a.onclick = function() {
        if (themesheet.getAttribute("href") == "css/style.css") {
            themesheet.href = "css/style-dark.css";                    
        } else {
            themesheet.href = "css/style.css";
        }
    }
};