const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

function observerCallback(entries, _) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('fade-out', 'fade-in');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
const fadeElements = document.querySelectorAll('.fade-element');

fadeElements.forEach((el) => observer.observe(el));
