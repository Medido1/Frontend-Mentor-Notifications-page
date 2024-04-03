const notifications = document.querySelectorAll('.notif');
const circles = document.querySelectorAll('.circle');
const markAsRead = document.querySelector('.btn.read');
const notifCounter = document.querySelector('.notifications_number');

function displayCount() {
  let count = 0;
  notifications.forEach((notif) => {
    if (notif.classList.contains('read')) {
      count += 1;
    }
  });
  notifCounter.textContent = count;
}

notifications.forEach((notif, index) => {
  notif.addEventListener('click', () => {
    notif.classList.toggle('read');
    circles[index].classList.toggle('read');
    displayCount();
  });
});

markAsRead.addEventListener('click', () => {
  notifications.forEach((notif) => {
    notif.classList.remove('read');
  });
  circles.forEach((circle) => {
    circle.classList.remove('read');
  });
  displayCount();
});

displayCount();
