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
