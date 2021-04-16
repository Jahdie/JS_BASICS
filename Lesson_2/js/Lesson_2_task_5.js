/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

'use strict'

let arg1 = Number(prompt("Введите первое число:"))
let arg2 = Number(prompt("Введите второе число:"))
let operation = prompt("Введите аримфетическое операцию:")

function arithmeticOperating(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1,arg2)
        case "-":
            return subtraction(arg1, arg2)
        case "*":
            return multiplication(arg1, arg2)
        case "/":
            return division(arg1, arg2)
        default:
            alert("Вы ввели не знак операции.")
    }
}
alert(`${arg1} ${operation} ${arg2}= ${arithmeticOperating(arg1, arg2, operation)}`)