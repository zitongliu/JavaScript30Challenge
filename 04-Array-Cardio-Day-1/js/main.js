// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

function filterInventors(inventor){
  var birthYear = parseInt(inventor.year);
  return (birthYear >= 1500) && (birthYear <1600);
}

const filteredInventors = inventors.filter(filterInventors);
console.table(filteredInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

// map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

function prepareFirstLastName(object){
  var firstName = object.first;
  var lastName = object.last;
  return [firstName, lastName];
}

var firstLastNames = inventors.map(prepareFirstLastName);
console.log(firstLastNames);

var firstLastArrow = inventors.map(object => object.first + " " + object.last);
console.log(firstLastArrow);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

var birthYears = inventors.map(function(obj){
  return obj.year;
});
console.log(birthYears);

var ordered = inventors.sort(function(a,b){
  if (a.year > b.year){
    return 1;
  } else {
    return -1;
  }
});
console.log(ordered);

var orderedArrow = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(orderedArrow);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

  // arr.reduce(callback, [initialValue])
  // [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  //   return accumulator + currentValue;
  // });

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


// 5. Sort the inventors by years lived
const yearsSorted = inventors.sort(function(a, b){
  if ( (a.passed - a.year) > (b.passed - b.year) ){
    return -1;
  } else {
    return 1;
  }
});

console.table(yearsSorted);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSorted = people.sort(function(a,b){
  if (a > b){
    return 1;
  } else {
    return -1;
  }
});
console.log(peopleSorted);

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1:-1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item){
  if(!obj[item]){
    obj[item] = 0;
  }
  obj[item] ++;
  return obj;
}, {});
