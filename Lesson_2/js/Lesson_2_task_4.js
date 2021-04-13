/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return*/

'use strict'

let num_1 = Number(prompt("Введите первое число:"))
let num_2 = Number(prompt("Введите второе число:"))

function addition(num_1, num_2) {
    return num_1 + num_2
}

function subtraction(num_1, num_2) {
    return num_1 - num_2
}

function multiplication(num_1, num_2) {
    return num_1 * num_2
}

function division(num_1, num_2) {
    return num_1 / num_2
}

alert(`${num_1} + ${num_2} = ${addition(num_1,num_2)}`)
alert(`${num_1} - ${num_2} = ${subtraction(num_1,num_2)}`)
alert(`${num_1} / ${num_2} = ${division(num_1,num_2)}`)
alert(`${num_1} * ${num_2} = ${multiplication(num_1,num_2)}`)