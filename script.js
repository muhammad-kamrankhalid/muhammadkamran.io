// Basic UI interactions: photo preview, theme toggle, print
document.addEventListener('DOMContentLoaded', () => {
  const photoInput = document.getElementById('photoInput');
  const photoPreview = document.getElementById('photoPreview');
  const printBtn = document.getElementById('printBtn');
  const toggleThemeBtn = document.getElementById('toggleThemeBtn');

  // Photo preview
  photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      photoPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  // Print (user can choose Save as PDF)
  printBtn.addEventListener('click', () => {
    window.print();
  });

  // Theme toggle (dark mode)
  toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  // Accessibility: keyboard shortcut P for print (P or p)
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'p' || e.key === 'P') && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      window.print();
    }
  });
});
