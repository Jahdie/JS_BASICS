/*1 (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundreds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:

Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
https://mzl.la/2XCVSsx

Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .

Используйте также остаток от деления на 10, например 123 % 10 будет 3

Вам также может пригодится делить число на 100 и на 10*/

'use strict';

function get_numeral_rank(num) {
    let numeral_rank = {};

    if ((num < 999 || num > 0) || Number.isInteger(num) === true) {
        numeral_rank = {units: 0, tens: 0, hundreds: 0};
        let num_from_user_for_func = num_from_user;

        for (let index_obj = 0; index_obj <= String(num_from_user_for_func).length + 1; index_obj++) {
            numeral_rank[Object.keys(numeral_rank)[index_obj]] = num_from_user_for_func % 10;
            num_from_user_for_func = Math.floor(num_from_user_for_func / 10);
        }

        return numeral_rank;

    } else {
        alert("Некорректный ввод!!!");
        return numeral_rank;
    }
}

let num_from_user = Number(prompt("Введите число от 0 до 999", "0"));
alert(`Число ${num_from_user} имеет:\n- ${get_numeral_rank(num_from_user).units} ед.\n-` +
    ` ${get_numeral_rank(num_from_user).tens} дес.\n- ${get_numeral_rank(num_from_user).hundreds} сот.`);


