// Cafe guide: animate the espresso-drink ratio bars into view once.
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.ratio-bar');
  if (!('IntersectionObserver' in window) || bars.length === 0) {
    bars.forEach(b => b.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => observer.observe(b));
});
