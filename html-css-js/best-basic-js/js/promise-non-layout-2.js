// ================= Создание промиса =================

//?const justMyPromise = new Promise((resolve, reject) => {
// При созданиие объекта myPromise сразу выполняется данный код
// Например асинхронная операция
//?	console.log('Run some code');

// Далее по результату асинхронной операции, на основе полученного ответа
// мы сами вызываем функции resolve() или reject()
// передавая в них значение которое получили от асинхронной операции

//?	resolve(someValue); // успешное завершение
// или
//?	reject('failure reason'); // неудача
// ?});

//=====================================================
const mainPromise = new Promise(function (resolve, reject) {
  //? console.log('Promise created');
  setTimeout(function () {
    // Представим что здесь был запрос на сервер
    const response = false; //! set true
    if (response) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

mainPromise
  .then(function () {
    //? console.log('Then');
  })
  .catch(function () {
    console.log('Catch');
  });

// ======== Использование. Потребление Promise ========

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // Представим что здесь был запрос на сервер
    // и он вернул нам значение в переменную res

    res = 'success'; //!change this string
    // В случае успеха нашего запроса мы должны запустить функцию resolve()
    if (res == 'success') {
      resolve('DONE!');
    } else {
      // В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
      reject('FAIL!');
    }
  }, 500);
})
  .then(function (data) {
    console.log('---- Resolve function ----');
    console.log(data);
  })
  .catch(function (data) {
    console.log('---- Reject function ----');
    console.log(data);
  });
