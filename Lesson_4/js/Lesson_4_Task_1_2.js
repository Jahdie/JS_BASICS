/*1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.*/

'use strict';

// В стиле ES5
function PostES5(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
}

PostES5.prototype.edit = function (text) {
    this.text = text
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date)
    this.highlighted = false
}

AttachedPostES5.prototype = Object.create(PostES5.prototype)
AttachedPostES5.constructor = AttachedPostES5
AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}

let myPostES5 = new AttachedPostES5("Pushkin", "The wondrous moment of our meeting...", "10.02.1837")
console.log(myPostES5)
console.log(myPostES5.highlighted)
myPostES5.makeTextHighlighted()
console.log(myPostES5.highlighted)
console.log(myPostES5.text)
myPostES5.edit("I well remember you appear")
console.log(myPostES5.text)


// В стиле ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author
        this.text = text
        this.date = date
    }

    edit(text) {
        this.text = text
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false
    }

    makeTextHighlighted() {
        this.highlighted = true
    }
}

let myPostES6 = new AttachedPostES6("Pushkin", "The wondrous moment of our meeting...", "10.02.1837")
console.log(myPostES6)
console.log(myPostES6.highlighted)
myPostES6.makeTextHighlighted()
console.log(myPostES6.highlighted)
console.log(myPostES6.text)
myPostES6.edit("I well remember you appear")
console.log(myPostES6.text)