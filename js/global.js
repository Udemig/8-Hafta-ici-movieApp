"use strict";
/*
 * use strict: Strict mode, js'de potansiyel hataları yakalamak için daha katı kurallar
 * uygulayan bir özelliktir.
 */

const addEventOnElements = function (elements, eventType, callback) {
  console.log(elements);
  /*
   * element: Her bir öğe, olay dinleyicisi eklenecek bir DOM öğesini temsil eder.
   * eventType: Bu parametre, olay türünü belirtir.Örneğin("click","mouseover","keydowm") gibi olay türüdür.
   * callback: Bu parametre, belirtilen olay türü gerçekleştiğinde çalıştırılan bir fonksiyon olmalıdır.
   */
  for (const elem of elements) {
    elem.addEventListener(eventType, callback);
  }
};

const searchBox = document.querySelector(".search-box");
const searchTogglers = document.querySelectorAll(".search-toggler");

addEventOnElements(searchTogglers, "click", function () {
  searchBox.classList.toggle("active");
});

// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//   console.log(number);
// }
