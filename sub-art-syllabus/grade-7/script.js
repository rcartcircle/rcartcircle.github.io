document.addEventListener('DOMContentLoaded', function() {
  const totalLessons = 3; // Set the total number of lessons
  const currentPath = window.location.pathname;
  const currentLessonMatch = currentPath.match(/g7-(\d+)\.html/); // Assuming g7-<lesson number>.html format
  const currentLessonNumber = currentLessonMatch ? parseInt(currentLessonMatch[1]) : 0;

  // "Previous" button
  const prevLessonBtn = document.querySelector('#prevLessonBtn');
  const prevLessonPath = currentLessonNumber > 1 ? `../0${currentLessonNumber - 1}/g7-${currentLessonNumber - 1}.html` : '#';
  prevLessonBtn.setAttribute('href', prevLessonPath);

  // Update previous button text
  prevLessonBtn.querySelector('p').textContent = currentLessonNumber > 1 ? 'Previous Lesson' : 'This is the first Lesson in this Grade';

  // "Next" button
  const nextLessonBtn = document.querySelector('#nextLessonBtn');
  const nextLessonPath = currentLessonNumber < totalLessons ? `../0${currentLessonNumber + 1}/g7-${currentLessonNumber + 1}.html` : '#';
  nextLessonBtn.setAttribute('href', nextLessonPath);

  // Update next button text
  nextLessonBtn.querySelector('p').textContent = currentLessonNumber < totalLessons ? 'Next Lesson' : 'This is the last Lesson in this Grade';
});
