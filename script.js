function showSection(sectionId) {
    // Öncelikle tüm bölümleri gizleyelim
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Tıklanan bölümü gösterelim
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
  }
  