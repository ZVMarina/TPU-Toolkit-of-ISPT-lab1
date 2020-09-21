// Вариант 4
// Задание 1.1: Создать программу, вычисляющую площадь треугольника (S) по формуле S = 0,5АН.

const AreaTriangleButton = document.querySelector('.AreaTriangleButton')

AreaTriangleButton.addEventListener('click', calculateAreaTriangle)

function calculateAreaTriangle() {
    const A = prompt('Введите значение A:');
    const H = prompt('Введите значение H:');
    const S = 0.5*A*H
    alert(`Площадь треугольника = ${S}`)
}