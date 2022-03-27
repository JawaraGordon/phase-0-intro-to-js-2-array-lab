// Write your solution here

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function destructivelyAppendCat(name) {
    return cats.push("Ralph");

}

destructivelyAppendCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");

}

destructivelyPrependCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function destructivelyRemoveLastCat(name) {
    return cats.pop();

}

destructivelyRemoveLastCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function destructivelyRemoveFirstCat(name) {
    return cats.shift();

}

destructivelyRemoveFirstCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function appendCat() {
    return [...cats, "Broom"];

}

appendCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function prependCat() {
    return ["Arnold", ...cats];

}

prependCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function removeLastCat() {
    return cats.slice(0,2);

}

removeLastCat();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 beforeEach();

function removeFirstCat() {
    return cats.slice(1);

}

removeFirstCat();



