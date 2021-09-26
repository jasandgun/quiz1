let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('css-theme', 'dark');		
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('css-theme', 'light');
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function themeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('css-theme', 'light');
		sessionStorage.setItem('theme', 'light');
	} else if (theme === "light") {
		document.documentElement.setAttribute('css-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('css-theme', 'light');
		sessionStorage.setItem('theme', 'light');
	} else {
		document.documentElement.setAttribute('css-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('css-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
} else if (theme === "light") {
	document.documentElement.setAttribute('css-theme', 'light');
	sessionStorage.setItem('theme', 'light');
}