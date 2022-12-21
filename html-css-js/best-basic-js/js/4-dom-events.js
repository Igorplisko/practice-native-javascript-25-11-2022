// ============= Работа c прослушкой событий =============

const button = document.querySelector('#button-js');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const imgJs = document.querySelector('#logo-js');
button.value = 'Remove';

// button.addEventListener('click', function () {
//   console.log('Click!');
//   imgJs.remove();
// });

button.onclick = function () {
  imgJs.remove();
};

//________________________________________________________
// difference between events


button3.addEventListener('click', function () {
  console.log('Click_1');
});

button3.addEventListener('click', () => {
  console.log('Click_2');
});

button3.addEventListener('click', () => console.log('Click_3'));

button3.value = 'Кнопка ---->3';

const variableClick = () => {
  console.log('Click_');
};

function justClick() {
  console.log('Click_0');
}

button3.addEventListener('click', variableClick);
button3.addEventListener('click', justClick);
//_______________

button3.onclick = function () {
  console.log('Click-------0');
};

button3.onclick = () => {
  console.log('Click-------1');
};

button3.onclick = () => console.log('Click-------2');

button3.onclick = function () {
  buttonClick();
};

function buttonClick() {
  console.log('Click-------3');
}

// button3.onclick = () => buttonClick();
