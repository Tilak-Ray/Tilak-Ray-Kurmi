document.addEventListener('DOMContentLoaded', () => {
  // Select all sections with an id
  const sections = document.querySelectorAll('section[id]');
  // Select all nav links inside .navContent > ul
  const navLinks = document.querySelectorAll('.navContent > ul > a');

  sections.forEach(section => {
    const id = section.id;
    const link = document.querySelector(`.navContent > ul > a[href="#${id}"]`);
    if (link) {
      section.addEventListener('mouseenter', () => {
        link.classList.add('active');
      });
      section.addEventListener('mouseleave', () => {
        link.classList.remove('active');
      });
    }
  });
});

