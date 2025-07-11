let currentStage = 0; // 0 = cover, 1 = open book, 2 = closed back
const pages = [
  document.getElementById('page1'),
  document.getElementById('page2'),
  document.getElementById('page3'),
  document.getElementById('page4')
];

function goNext() {
  if (currentStage === 0) {
    // Open book: flip front cover
    pages[0].classList.add('flipped');
    currentStage = 1;
  } else if (currentStage === 1) {
    // Close book: flip back cover
    pages[3].classList.add('flipped');
    currentStage = 2;
  }
}

function goBack() {
  if (currentStage === 2) {
    pages[3].classList.remove('flipped');
    currentStage = 1;
  } else if (currentStage === 1) {
    pages[0].classList.remove('flipped');
    currentStage = 0;
  }
}

// Swipe for mobile
let startX = 0;
window.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
window.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    goBack(); // swipe right
  } else if (startX - endX > 50) {
    goNext(); // swipe left
  }
});

// Arrows for desktop
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    goNext();
  } else if (e.key === 'ArrowLeft') {
    goBack();
  }
});

// Click/tap anywhere to go to next
document.getElementById('book').addEventListener('click', goNext);
