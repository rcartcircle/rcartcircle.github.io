document.addEventListener('DOMContentLoaded', function() {
  const totalLessons = 7; //Set the total number of lessons
  const currentPath = window.location.pathname;
  const currentLessonMatch = currentPath.match(/g10-(\d+)\.html/); //Change g6 to g<your grade>; Assuming g6-<lesson number>.html format
  const currentLessonNumber = currentLessonMatch ? parseInt(currentLessonMatch[1]) : 0;

  // "Previous" button
  const prevLessonBtn = document.querySelector('#prevLessonBtn');
  const prevLessonPath = currentLessonNumber > 1 ? `../0${currentLessonNumber - 1}/g10-${currentLessonNumber - 1}.html` : '../grade-10-main.html'; //Change g6 to g<your grade> and grade-6-main.html to grade-<your grade>-main.html
  prevLessonBtn.setAttribute('href', prevLessonPath);

  // Update previous button text
  prevLessonBtn.querySelector('p').textContent = currentLessonNumber > 1 ? 'Previous Lesson' : 'All Lessons';

  // "Next" button
  const nextLessonBtn = document.querySelector('#nextLessonBtn');
  const nextLessonPath = currentLessonNumber < totalLessons ? `../0${currentLessonNumber + 1}/g10-${currentLessonNumber + 1}.html` : '../grade-10-main.html'; //Change g6 to g<your grade> and grade-6-main.html to grade-<your grade>-main.html
  nextLessonBtn.setAttribute('href', nextLessonPath);

  // Update next button text
  nextLessonBtn.querySelector('p').textContent = currentLessonNumber < totalLessons ? 'Next Lesson' : 'All Lessons';
});
