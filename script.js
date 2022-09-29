for(let i = 0; i < 13; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = `<h2>Content</h2>`
  document.body.appendChild(box);
}

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}