// IMPORTING JSON DATA

fetch('../lessonNavigation.json')
  .then(response => response.json())
  .then(data => {
    const previousLink = document.getElementById('previous');
    const nextLink = document.getElementById('next');

    // Replace 'lesson[x]' with the current lesson
    const lessonKey = "lesson3";
    
    previousLink.href = data.lessonNavigation[lessonKey].previous;
    nextLink.href = data.lessonNavigation[lessonKey].next;
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });