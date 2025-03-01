'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function getEmployees(listOfPeople) {
  const people = [];

  for (const item of listOfPeople) {
    people.push({
      name: item.innerHTML.trim(),
      age: item.dataset.age,
      salary: item.dataset.salary,
      position: item.dataset.position,
    });
  }

  return people;
}

function sortList(listOfLi, listOfPeople) {
  const newList = [...listOfPeople].sort((item1, item2) => {
    return makeNumber(item2) - makeNumber(item1);
  });

  for (const item of newList) {
    listOfLi.append(item);
  }
}
sortList(ul, list);
getEmployees(list);

function makeNumber(str) {
  return +str.dataset.salary.split(',').join('').slice(1);
}
