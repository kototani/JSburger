const h1 = document.querySelector('h1');

console.log(h1);

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;

let startX = 0; // フリック開始時の位置

function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  }
}

function updateArrows() {
  // 最初のスライドの場合は prev を非表示にし、最後のスライドの場合は next を非表示にする
  if (count === 0) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }

  if (count === totalSlides - 1) {
    next.style.display = 'none';
  } else {
    next.style.display = 'block';
  }
}

function nextClick() {
  // もし count が totalSlides - 1 より小さい場合のみインクリメント
  if (count < totalSlides - 1) {
    slide.classList.remove(`slide${count + 1}`);
    count++;
    slide.classList.add(`slide${count + 1}`);
    updateListBackground();
    updateArrows();
  }
}

function prevClick() {
  // もし count が 0 より大きい場合のみデクリメント
  if (count > 0) {
    slide.classList.remove(`slide${count + 1}`);
    count--;
    slide.classList.add(`slide${count + 1}`);
    updateListBackground();
    updateArrows();
  }
}

next.addEventListener('click', () => {
  nextClick();
});

prev.addEventListener('click', () => {
  prevClick();
});

updateArrows();



slide.addEventListener('touchstart',(e) => {
  startX = e.touches[0].clientX;
},false);

slide.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const distance  = startX - endX;

  if (Math.abs(distance) > 50) {
    if (distance > 0){
      nextClick();
  }else{
    prevClick();
  }
}
},false);


