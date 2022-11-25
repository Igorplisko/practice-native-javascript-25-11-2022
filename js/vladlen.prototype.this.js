const Animal = function (options) {
    this.name = options.name
    this.color = options.color
    this.voice = function () {
        console.log('Base voise from ', this.name)
    }
}
Animal.prototype.voice = function () {
    console.log('Base voice from', this.name)

}

console.log(Animal.prototype)

const dog = new Animal({
    name: "Rex",
    color: '#fff'
})

dog.voice()

// console.log(dog)
// console.log(dog.name)
// console.log(dog.color)
const Cat = function () {

}

const cat = new Cat({
    name: 'Murzik',
    color: '#000',
    hasTail: true
})

