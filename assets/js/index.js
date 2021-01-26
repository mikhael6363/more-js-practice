'use strict';

/*
  1. Вычислить сумму первых N элементов последовательности.Параметр N задает пользователь (например n=4 , 1+2+3+4).
*/

// 1st variant
const sumOfSequence1 = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(sumOfSequence1(5)); // 15

// 2nd variant: via recursion
const sumOfSequence2 = (num) => {
  if(typeof num !== 'number') {
    throw new TypeError();
  }
  if(num < 0) {
    return null;
  }
  return num + sumOfSequence2(num - 1);
};
console.log(sumOfSequence2(5)); // 15


/*
  2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
*/
class Student {
  constructor(name, surName, male = true, contacts, university) {
    this.name = name;
    this.surName = surName;
    this.male = male;
    this.contacts = contacts;
    this.university = new University(university);
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if(typeof newName !== 'string') {
      throw new TypeError();
    }
    this._name = newName;
  }
  get surName() {
    return this._surName;
  }
  set surName(newSurName) {
    if(typeof newSurName !== 'string') {
      throw new TypeError();
    }
    this._surName = newSurName;
  }
  get male() {
    return this._male;
  }
  set male(newMale) {
    if(typeof newMale !== 'boolean') {
      throw new TypeError();
    }
    this._male = newMale;
  }
  get contacts() {
    return this._contacts;
  }
  set contacts(newContacts) {
    this._contacts = newContacts;
  }
}

/*
  2.2 Создать объект, который содержит свойства, о факультете и кафедре.
  2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
*/
class University {
  constructor(faculty, department) {
    this.faculty = faculty;
    this.department = department;
  }
}

const university = new University('Information Technologies', 'Harvard');

const firstStudent = new Student('Mark', 'Zuckerberg', true,'facebook@mail.com', university);
console.log(firstStudent);

/*
  2.4 Реализовать функцию выводит на экран всю информацию о студенте.
*/


/*
  3.1 Создать числовой массив и проинициализировать его из 25 элементов.
  3.1*Инициализация с помощью случайных чисел
*/

const array = new Array(25).fill().map(() => Math.round(Math.random() * 100));

/*
  3.2 Вывести элементы с четными индексами
  3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
  3.4 Вывести индексы нулевых элементов (элемент равен нулю)
*/
const evenNums = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(i % 2 === 0 ||
      arr[i] % 2 === 0 ||
      arr[i] === 0) {
      console.log(arr[i]);
    }
  }
};
evenNums(array);

/*
  3.5 Подсчитать количество нулевых элементов
*/
const array2 = [0, 25, 0, 33, 54, 31];

const nullElements = (arr) => {
  const newArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray.length;
};
console.log(nullElements(array2));

/*

*/


/*

*/



