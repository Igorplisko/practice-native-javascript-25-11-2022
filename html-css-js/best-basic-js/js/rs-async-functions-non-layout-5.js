// ========  Async functions. Асинхронные функции. Потребление Promise   ========

function promiseFunction() {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = false;
      if (result) {
        resolve('DONE!');
      } else {
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
  //? return myPromise;
}
// promiseFunction();

//? promiseFunction().then().catch()
//=================================================================

async function startPromise() {
  try {
    const res = await promiseFunction();
    console.log(res);
  } catch (e) {
    //imagine that the server returned an error to us, then in this place in the code the error will be caught
    console.log(e);
  }
}
// startPromise();

//=================================================================

//? ========  Несколько асинхронных операций. Серия промисов.   ======== best code

function checkRooms() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Проверяем номера в отеле...');
      // ---- код который отправляет запрос в отель ---
      let availableRooms = true; //! set false

      if (availableRooms) {
        resolve('Номера есть!');
      } else {
        reject('Номеров нет.');
      }
    }, 1500);
  });
}

function checkTickets(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('----  checkTickets ----');
      console.log('Ответ на предыдущем шаге:', data);

      console.log('Проверяем авиабилеты...');
      // ---- код который отправляет запрос в авиакомпанию ---
      const availableTickets = true;

      if (availableTickets) {
        let message = 'Билеты есть';
        resolve(message);
      } else {
        let message = 'Билетов нет';
        reject(message);
      }
    }, 1000);
  });
}

function submitVocation(data) {
  console.log('-----submitVocation ------');
  console.log('Answer in previous step -', data);
  console.log('We are going on vacation✈️🏝🏖');
}
function cancelVocation(data) {
  console.log('-----cancelVocation------');
  console.log('Answer in previous step -', data);
  console.log('Vacation canceled 😭');
}
//============ you shouldn't write this code without (try catch)
async function checkVacation() {
  const roomsResult = await checkRooms();
  const ticketsResult = await checkTickets(roomsResult);

  if (ticketsResult) {
    submitVocation(ticketsResult);
  } else {
    cancelVocation(ticketsResult);
  }
}
//? checkVacation()

//============ you need to use (try catch) in this case

async function checkVacationTryCatch() {
  try {
    const roomsResult = await checkRooms();
    const ticketsResult = await checkTickets(roomsResult);
    submitVocation(ticketsResult);
  } catch (error) {
    cancelVocation(error);
  }
}

checkVacationTryCatch()