// Вариант 4
// Задание 1.1: Создать программу, вычисляющую площадь треугольника (S) по формуле S = 0,5АН.

const AreaTriangleButton = document.querySelector('.AreaTriangleButton')

AreaTriangleButton.addEventListener('click', calculateAreaTriangle)

function calculateAreaTriangle() {
  const A = +prompt('Введите значение A:');
  const H = +prompt('Введите значение H:');
  const S = 0.5 * A * H
  alert(`Площадь треугольника = ${S}`)
}

/* Задание 1.2: Y = ( B*X1 - C^2*X2 ) / 2;                    где     X1 =  B + √( B^2 - 4*B*C );
                Z = ( M*X2^2 + L*X1 ) / B;                            X2 =  M * B /2*C .
*/

const FindYZButton = document.querySelector('.FindYZButton')

FindYZButton.addEventListener('click', calculateYZ)

function calculateYZ() {
  const B = +prompt('Введите значение B:');
  const M = +prompt('Введите значение M:');
  const C = +prompt('Введите значение C:');
  const L = +prompt('Введите значение L:');
  const X1 = (B + Math.sqrt(B ** 2 - 4 * B * C));
  const X2 = M * B / 2 * C;
  const Y = (B * X1 - C ** 2 * X2) / 2;
  const Z = (M * X2 ** 2 + L * X1) / B;
  alert(`Y = ${Y}`);
  alert(`B = ${Z}`)
}

/* Задание 2.1:               |  Q    ,                      если            Q < -2;
                              |  Q^2  ,                                  -2 ≤ Q ≤ 2;
                        R  =  |  Q^3  ,                                   2 ≤ Q ≤ 5;
                              |  Q^4  ,                                       Q > 5.

*/
const DefineRButton = document.querySelector('.DefineRButton')

DefineRButton.addEventListener('click', defineR)

function defineR() {
  const Q = +prompt('Введите значение Q:');
  let R;
  if (Q < -2) {
    R = Q
  } else if (Q >= -2 && Q <= 2) {
    R = Q ** 2
  } else if (Q > 2 && Q <= 5) {
    R = Q ** 3
  } else if (Q > 5) {
    R = Q ** 4
  }
  alert(`R = ${R}`)
}

// Задание 2.2: Определить, попадает ли точка с координатами X , Y в прямоугольник с заданными координатами двух вершин.

const FindPointButton = document.querySelector('.FindPointButton')

FindPointButton.addEventListener('click', findPoint)

function findPoint() {
  const x1 = +prompt('Введите значение x1:');
  const y1 = +prompt('Введите значение y1:');
  const x2 = +prompt('Введите значение x2:');
  const y2 = +prompt('Введите значение y1:');
  const x = +prompt('Введите значение x:');
  const y = +prompt('Введите значение y:');
  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    alert('Точка попадает в прямоугольник')
  } else {
    alert('Точка не попадает в прямоугольник')
  }
}

/* Задание 3.1: Z = ( F + 1 ) * 3 - B^2 * ( X1 + 2 )^2 ;
            a) F изменяется от 5 до -3 с шагом 0,1;  x1, B - произвольно
            б) F изменяется от 5 до -3 с шагом 0,1; B изменяется от 5 до -3 с шагом -1; x1-произвольно
*/

const CalculateZButtonA = document.querySelector('.CalculateZButtonA')

CalculateZButtonA.addEventListener('click', calculateZA)

function calculateZA() {
  const X1 = 1;
  const B = 0;
  let Z;
  for (let F = 5; F >= -3; F = F - 0.1) {
    F = +F.toFixed(1);
    Z = ((F + 1) * 3 - B ** 2 * (X1 + 2) ** 2).toFixed(1)
    console.log(`Z = ${Z}`)
  }
}

const CalculateZButtonB = document.querySelector('.CalculateZButtonB')

CalculateZButtonB.addEventListener('click', calculateZB)

function calculateZB() {
  const X1 = 1;
  let Z;
  let B;
  for (let i = 5; i >= -3; i = i - 1) {
    B = i
    console.log(`Для B = ${B} и X1 = ${X1}`)
    for (let F = 5; F >= -3; F = F - 0.1) {
      F = +F.toFixed(1);
      Z = ((F + 1) * 3 - B ** 2 * (X1 + 2) ** 2).toFixed(1)
      console.log(`Z = ${Z}`)
    }
  }
}

/* Задание 3.2: F = ( L - Z1 - M - Z2 ) / L * M ;
                Z2 изменяется от 10 до 5 с шагом -1
                M,L,Z1-произвольно
*/

const CalculateFButton = document.querySelector('.CalculateFButton')

CalculateFButton.addEventListener('click', calculateF)

function calculateF() {
  const M = 1;
  const L = 1;
  const Z1 = 1;
  let Z2 = 10;
  while (Z2 >= 5) {
    F = +((L - Z1 - M - Z2) / L * M).toFixed(1)
    console.log(F)
    Z2 = Z2 - 1
  }
}