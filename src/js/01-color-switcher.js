function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  p: document.querySelector('p'),
};

const titleColor = document.createElement('h1');
titleColor.textContent = `Random Background Color: `;
titleColor.style.position = 'absolute';
titleColor.style.top = '20px';
titleColor.style.left = '450px';
titleColor.style.width = '700px';
titleColor.style.marginBottom = '50px';
titleColor.style.textAlign = 'center';
refs.p.append(titleColor);

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

let intervalId = null;

function onStart() {
  refs.start.disabled = true;
  refs.stop.disabled = false;

  intervalId = setInterval(changeBackgroundColor, 1000);

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    titleColor.textContent = `Random Background Color: ${getRandomHexColor()}`;
  }
}

function onStop() {
  refs.stop.disabled = true;
  refs.start.disabled = false;
  clearInterval(intervalId);
}
