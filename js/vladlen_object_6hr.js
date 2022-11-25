const persone = {
    name: 'Igor',
    age: 25,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Information about the person by name:', this.name)
    }
}
// console.log(person.name)
// console.log(person['age'])
// person.greet()
// person.age++
// person.languages.push('by')
// console.log(person)

// //!  деструктуризация
// const {
//     name,
//     age,
//     languages
// } = person

// console.log(name, age, languages)

// for (let key in person) {
//     console.log('key:', key)
//     console.log('value:', person[key])
// }
// //!---------------------------------------
// const keysPerson = Object.keys(person)
// keysPerson.forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

//-----------------------------------------
// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

// //! Context
// person.info()

const logger = {
    keys(obj) {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValue() {
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })
        //!--------------------------------------------------

        Object.keys(this).forEach(function (key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))

    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('--------Start--------')
        }
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
            if (between) {
                console.log('--------------------')
            }
        })
        if (bottom) {
            console.log('----------End--------')
        }
    }
}


logger.keysAndValue.call(persone)

// const bound = logger.keys.bind(persone)
// bound()

// logger.keys.call(persone)

//!----------------------------------
logger.withParams.apply(persone, [true, true, true])
logger.withParams.call(persone, true, true, true)






