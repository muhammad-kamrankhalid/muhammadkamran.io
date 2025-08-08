document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('printBtn');

  // Print/Save as PDF
  printBtn.addEventListener('click', () => {
    window.print();
  });
});
