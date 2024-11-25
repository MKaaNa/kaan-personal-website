function showSection(sectionId) {
    // Öncelikle tüm bölümleri gizle
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';  // Bölümleri gizle
      section.style.opacity = 0;       // Opaklık sıfırla
    });
  
    // Tıklanan bölümü göster
    const section = document.getElementById(sectionId);
    section.style.display = 'block';   // Bölümü göster
    section.style.opacity = 1;         // Opaklık sıfırla
  }
  