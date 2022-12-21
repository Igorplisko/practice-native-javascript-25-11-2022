// =================  Работа c элементами  =================
// Создать элемент
//?____ document.createElement('tag-name')
// Изменить HTML содержимое внутри элемента
//?____ element.innerHTML = ''
// Изменить Текстовое  содержимое внутри элемента
//?____ node.innerText = ''
// Клонирование элемента
//?node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого
// вставить элемент внутрь другого элемента
//?____ ?element.append(nodesOrDOMStrings)
// Удалить элемент
//?element.remove()

// Select container
const container = document.querySelector('#elementsContainer');

// Create header
const newHeader = document.createElement('h1');
newHeader.textContent = 'New heading';
// newHeader.innerText = 'New heading___1'
newHeader.classList.add('sky-blue-text');
newHeader.id = 'ingvar';
container.append(newHeader);

// Copy header
const mainHeader = document.querySelector('header');
const copyOfHeader = mainHeader.cloneNode(true);
const copyOfHeader1 = mainHeader.cloneNode();

// Doesn't copy child elements inside the header
container.append(copyOfHeader);
container.append(copyOfHeader1);

// Inserting markup through string
const htmlExample = '<h2>Text title </h2>';
container.insertAdjacentHTML('beforeend', htmlExample);

// Inserting markup through template strings
const title = 'One more title 🟦🟨';
const htmlExample2 = `<h2 class="sky-blue-text">${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample2);
