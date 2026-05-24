const colorThemes = document.querySelectorAll('[name="theme"]');


const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

// fallback for older browsers
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}

const setTheme = function (theme) {
    const root = document.documentElement;
    // root.style.setProperty('--color-theme', theme);
    root.className = theme;
}

// apply theme on page load
const applyTheme = function () {
    const theme = localStorage.getItem('theme');
    const root = document.documentElement;

    colorThemes.forEach((themeElt) => {
        if (themeElt.id === theme) {
            themeElt.checked = true;
        }
    });

    // fallback for no has support.
    // setTheme(theme);
    root.className = theme;

    // if(theme){
    //     root.style.setProperty('--color-theme', theme);
    // }
}

colorThemes.forEach((themeElt) => {
    themeElt.addEventListener('click', (e) => {
        // const colorTheme = e.target.value;
        // const root = document.documentElement;

        // root.style.setProperty('--color-theme', colorTheme);

        storeTheme(themeElt.id);
    });
});

document.onload = applyTheme();