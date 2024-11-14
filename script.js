const toggleButton = document.getElementById('theme-toggle');

document.addEventListener('dblclick', () => {
    document.body.classList.toggle('dark-theme');

    // Update the button text based on the theme
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Switch to Light Theme';
    } else {
        toggleButton.textContent = 'Switch to Dark Theme';
    }
});
// Detect system theme preference on first load
function setInitialTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Run the function on first load
setInitialTheme();

// Optional: Add event listener for system theme changes (if the user switches theme in OS settings)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

