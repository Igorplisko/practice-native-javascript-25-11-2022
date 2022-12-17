// ============ Работа c атрибутами ============
/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

const imgJs = document.querySelector('#logo-js');
const altValue = imgJs.getAttribute('alt');
imgJs.removeAttribute('alt');
console.log(altValue);

const img2 = document.querySelector('#logo-php');
const srcValue2 = img2.getAttribute('src');
img2.setAttribute('src', './img/php.png');
img2.setAttribute('width', '400');
// img2.src = './img/js.png'; //?  некоторые атрибуты можно менять через свойства
// img2.width = '300'

const buttonJs = document.querySelector('#button-js');
// const setAttribute = buttonJs.setAttribute( "value", 'Измененная кнопка')
buttonJs.value = 'Отправить';
