const marvelHeros = ["Thor", "Ironman", "Spidy"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeroes)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const allHero = marvelHeros.concat(dcHeroes)
// console.log(allHero);

// ...spread operator.

const newHero = [...marvelHeros, ...dcHeroes]
// console.log(newHero);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [4, 5]]]

const myReal = anotherArray.flat(Infinity)
// console.log(myReal);

// console.log(Array.isArray("Jexy"));
// console.log(Array.from("Jexy"));
// console.log(Array.from({name : "Jexy"})); // return empty array.

const score1 = 120
const score2 = 123
const score3 = 125

console.log(Array.of(score1, score2, score3));


