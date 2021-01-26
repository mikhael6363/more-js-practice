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
  4 Создать классы:
  - Книга (автор, название, год издания, издательство)
  - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
*/

class Book {
  constructor(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
  }
  get author() {
    return this._author;
  }
  set author(newAuthor) {
    if(typeof newAuthor !== 'string') {
      throw new TypeError();
    }
    this._author = newAuthor;
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    if(typeof newTitle !== 'string') {
      throw new TypeError();
    }
    this._title = newTitle;
  }
  get year() {
    return this._year;
  }
  set year(newYear) {
    if(typeof newYear !== 'number' ||isNaN(newYear)) {
      throw new TypeError();
    }
    this._year = newYear;
  }
  get publisher() {
    return this._publisher;
  }
  set publisher(newPublisher) {
    if(typeof newPublisher !== 'string') {
      throw new TypeError();
    }
    this._publisher = newPublisher;
  }
}

class Ebook extends Book {
  constructor(author, title, year, publisher, format, eNum) {
    super(author, title, year, publisher);
    this.format = format;
    this.eNum = eNum;
  }
  get format() {
    return this._format;
  }
  set format(newFormat) {
    if(typeof newFormat !== 'string') {
      throw new TypeError();
    }
    this._format = newFormat;
  }
  get eNum() {
    return this._eNum;
  }
  set eNum(newEnum) {
    this._eNum = newEnum;
  }
}

const book = new Book('Robert C. Martin', 'Clean Code', 2008, 'Prentice Hall');
console.log(book);

const ebook = new Ebook('Thomas H. Cormen', 'Introduction to Algorithms', 1989, 'MIT Press', '.epub & .pdf', 14146279370);
console.log(ebook);



/*
  5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
  вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
  вывод fizz вместо чисел, кратных 3;
  вывод buzz вместо чисел, кратных 5;
*/
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuz');
      continue;
    }
    if(i % 3 === 0) {
      console.log('fizz');
      continue;
    }
    if(i % 5 === 0 ) {
      console.log('buzz');
      continue;
    }
    console.log(i);
  }
}
fizzBuzz(15);


