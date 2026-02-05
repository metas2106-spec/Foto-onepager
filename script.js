document.addEventListener('DOMContentLoaded', function() {
    console.log("Skript geladen und bereit.");
    const btn = document.getElementById('theme-toggle');
    const body = document.body;

    // Gespeicherte Einstellung laden
    if (localStorage.getItem('mode') === 'dark') {
        body.classList.add('dark-mode');
        btn.textContent = "Hell-Modus";
    }

    // Klick-Handler
    btn.onclick = function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            btn.textContent = "Hell-Modus";
            localStorage.setItem('mode', 'dark');
        } else {
            btn.textContent = "Dunkel-Modus";
            localStorage.setItem('mode', 'light');
        }
    };
});