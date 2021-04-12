"use strict";
let temperature_celsius = +prompt("Введите градусы по шкале Цельсия.");
let temperature_fahrenheit = (9 / 5) * temperature_celsius + 32;
alert(`Температура по шкале Фаренгейта: ${temperature_fahrenheit}`)