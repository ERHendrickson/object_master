const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//an array of pokemon objects where the id is evenly divisibly by 3
const divThree = pokémon.filter(pok => pok.id % 3 === 0).map(pok => pok.name);
// console.log(divThree);

// an array of pokémon objects that are "fire" type
const fire = pokémon.filter(pok => pok.types[0] === "fire").map(pok => pok.name);
// console.log(fire);

// an array of pokémon objects that have more than one type
const multiType = pokémon.filter(pok => pok.types.length > 1).map(pok => pok.name);
// console.log(multiType);

// an array with just the names of the pokémon
const pokémonNames = pokémon.map(pok => pok.name);
// console.log(pokémonNames);

//an array with just the names of pokémon with an id greater than 99
const idOver = pokémon.filter(pok => pok.id > 100).map(pok => pok.name);
// console.log(idOver);

//an array with just the names of the pokémon whose only type is poison
const poison = pokémon.filter(pok => pok.types.includes("poison")).map(pok => pok.name);
// console.log(poison);

//an array containing just the first type of all the pokémon whose second type is "flying"
const secFly = pokémon.filter(pok => pok.types[1] === "flying").map(pok => pok.types[0]);
// console.log(secFly);

//a count of the number of pokémon that are "normal" type
const numNorm = pokémon.filter(pok => pok.types.includes("normal")).length;
console.log(numNorm);