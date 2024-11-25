// script.js
function toggleSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
}
