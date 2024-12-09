document.addEventListener('DOMContentLoaded', function() {
  const teamMembers = document.querySelectorAll('.team-member');
  const aboutHeading = document.querySelectorAll('.about-us-heading');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once the animation is applied
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  teamMembers.forEach(member => {
    observer.observe(member);
  });
  aboutHeading.forEach(member => {
    observer.observe(member);
  });
});