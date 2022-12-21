//============ Callback. Callback hell ============

// console.log('Start');

setTimeout(() => {
  // console.log('Print after 2000ms (2s)');
  // console.log('Finish')
}, 1000);

// console.log('Finish');

//==================================================

setTimeout(() => {
  // console.log('Step 1');
}, 2000);

setTimeout(() => {
  // console.log('Step 2');
}, 1500);

setTimeout(() => {
  // console.log('Step 3');
}, 1000);

//==================================================

setTimeout(() => {
  // console.log('Step 1');
  setTimeout(() => {
    // console.log('Step 2');
    setTimeout(() => {
      // console.log('Step 3');
    }, 1000);
  }, 1500);
}, 2000);

//==================================================

function checkRooms1() {
  // console.log('Checking hotel rooms...');
  const availableRooms = true; // set false
  return availableRooms;
}

if (checkRooms1()) {
  // console.log('You\'re lucky there are still rooms available.')
  // console.log('We are going on vacation✈️🏝🏖')
} else {
  // console.log('There are no available rooms vacation is canceled')
  // console.log('Vacation canceled 😭')
}

//==================================================

function checkRooms2() {
  setTimeout(() => {
    // console.log('Checking hotel rooms...');
    const availableRooms = true; // does not return true
    return availableRooms;
  }, 1000);
}

if (checkRooms2()) {
  // console.log("You're lucky there are still rooms available.");
  // console.log('We are going on vacation✈️🏝🏖');
} else {
  // console.log('There are no available rooms vacation is canceled');
  // console.log('Vacation canceled 😭');
}

//==================================================

function checkRooms() {
  setTimeout(() => {
    console.log('Checking hotel rooms...');
    const availableRooms = false;
    if (availableRooms) {
      console.log("You're lucky there are still rooms available.");
      console.log('We are going on vacation✈️🏝🏖');
    } else {
      console.log('There are no available rooms vacation is canceled');
      console.log('Vacation canceled 😭');
    }
  }, 1000);
}

// checkRooms()

//==================================================
function justCheckRooms() {
  setTimeout(function () {
    console.log('Checking hotel rooms...');
    let thisAvailableRooms = true;
    if (thisAvailableRooms) {
    } else {
    }
  }, 1000);
}

function cancelVocation(message) {
  console.log('-----cancelVocation------');
  console.log('Answer in previous step', message);
  console.log('Vacation canceled 😭');
}

function submitVocation(message) {
  console.log('-----submitVocation ------');
  console.log('Answer in previous step', message);
  console.log('We are going on vacation✈️🏝🏖');
}

//5 : 18
