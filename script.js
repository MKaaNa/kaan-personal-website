function toggleSection(sectionId) {
    // Tüm bölümleri gizle
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // İlgili bölümü göster
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}
