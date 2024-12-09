const h1 = document.querySelector('h1');

console.log(h1);

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;

function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  }
}

function nextClick() {
  // もし count が totalSlides - 1 より小さい場合のみインクリメント
  if (count < totalSlides - 1) {
    slide.classList.remove(`slide${count + 1}`);
    count++;
    slide.classList.add(`slide${count + 1}`);
    updateListBackground();
  }
}

function prevClick() {
  // もし count が 0 より大きい場合のみデクリメント
  if (count > 0) {
    slide.classList.remove(`slide${count + 1}`);
    count--;
    slide.classList.add(`slide${count + 1}`);
    updateListBackground();
  }
}

next.addEventListener('click', () => {
  nextClick();
});

prev.addEventListener('click', () => {
  prevClick();
});
