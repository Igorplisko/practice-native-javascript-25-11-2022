// ============= Работа c прослушкой событий =============
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener(
  'input',
  function () {
    console.log('input');
    console.log(inputText.value, '---');
    // textBlock.innerText = 'Hey mi friend'
    textBlock.innerText = inputText.value;
  },
  // { once: true }
);

// inputText.addEventListener('input', inputHandler, { once: true });

// function inputHandler() {
//   textBlock.innerText = inputText.value
// }
// __________________
// const inputHandler2 = () => textBlock.innerText = inputText.value
// inputText.addEventListener('input' ,inputHandler2)
// ============= =============