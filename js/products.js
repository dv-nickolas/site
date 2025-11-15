document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const brand = btn.getAttribute('data-brand');
      products.forEach(p => {
        if (brand === 'all' || p.getAttribute('data-brand') === brand) {
          p.style.display = 'block';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });
});