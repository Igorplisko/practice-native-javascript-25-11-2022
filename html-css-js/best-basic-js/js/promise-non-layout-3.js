// ========== Цепочка промисов. Синхронные шаги ============

const promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		// Представим что здесь был запрос на сервер.
		// Сервер вернул нам результат в переменную res
		// и дванные в dataFromServer
		const res = 'success';   //! change this string
		const dataFromServer = 'dataFromServer = DONE!';

		// !ВАЖНО! Мы сами определяем успешно
		// прошел запрос или нет, на основе полученных данных
		if (res == 'success') {
			// В случае успеха нашего запроса
			// мы должны запустить функцию resolve()
			resolve(dataFromServer);
		} else {
			// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
			reject(dataFromServer);
		}
	}, 500);
});

promise
	.then(
		function (data) {
			console.log('Step 1');
			console.log(data);
			return 'Data from Step 1';
		},
		function (data) {
			console.log('Error');
			console.log(data);
		}
	)
	.then(
		function (data) {
			console.log('Step 2');
			console.log(data);
			return 'Data from Step 2';
		},
		function (data) {
			console.log('Error');
			console.log(data);
		}
	);

// ========== Цепочка промисов. Несколько промисов c setTimeout ============

// const checkRooms = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		console.log('Проверяем номера в отеле...');
// 		// ---- код который отправляет запрос в отель ---
// 		let availableRooms = true;

// 		if (availableRooms) {
// 			resolve('Номера есть!');
// 		} else {
// 			reject('Номеров нет.');
// 		}
// 	}, 1500);
// })
// 	.then(function (data) {
// 		return new Promise(function (resolve, reject) {
// 			setTimeout(() => {
// 				console.log('---- then 1. checkTickets ----');
// 				console.log('Ответ на предыдущем шаге:', data);

// 				console.log('Проверяем авиабилеты...');
// 				// ---- код который отправляет запрос в авиакомпанию ---
// 				const availableTickets = true;

// 				if (availableTickets) {
// 					let message = 'Билеты есть';
// 					resolve('message');
// 				} else {
// 					let message = 'Билетов нет';
// 					throw new Error(message);
// 				}
// 			}, 1000);
// 		});
// 	})
// 	.then(function (data) {
// 		console.log('---- then 2. sumbitVacation ----');
// 		console.log('Ответ на предыдущем шаге:', data);
// 		console.log('Едем в отпуск! 🌴 :)');
// 	})
// 	.catch(function (data) {
// 		console.log('---- catch ----');
// 		console.log('Ответ на предыдущем шаге:', data);
// 		console.log('Отпуск отменяется 😢 :(');
// 	});
