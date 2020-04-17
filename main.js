console.log("hello c40");

//ford mustang 2015 red
const car = {

}

car.make = "Ford";
car.model = "Mustang";
car.year = 2015;
car.color = "red";

console.log(car);

//The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky"
const names = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
console.log(names);

//Define an object for four family members, and put each object in an array named familyMembers. 
//Each family member object that you create should have the same keys on them, but the values will 
//be different
const familyMembers = [];

const allen = {
  name: "Allen",
  age: 29,
  favoriteFood: "pizza"
}

const brandy = {
  name: "Brandy",
  age: 29,
  favoriteFood: "Sushi"
}

const harvey = {
  name: "Harvey",
  age: 30,
  favoriteFood: "Mexican Food"
}

const eddy = {
  name: "Eddy",
  age: 29,
  favoriteFood: "Chinese Food"
}

familyMembers.push(allen);
familyMembers.push(brandy);
familyMembers.push(harvey);
familyMembers.push(eddy);

console.log(familyMembers);

const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

let valuesWardrobe = Object.values(wardrobe);
console.log(valuesWardrobe);

for (let value in wardrobe) {
  console.log(wardrobe[value]);
}

console.log(wardrobe);

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

//Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables 
//first with the keys as their values. Use those variables to look up the values.

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

let address = "address"
let constructionDate = "constructionDate"
let cost = "cost"
let owner = "owner"
let architect = "architect"
console.log(empireStateBuilding[address], empireStateBuilding[constructionDate], empireStateBuilding[cost], empireStateBuilding[owner], empireStateBuilding[architect]);

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

//#1
console.log(`Part-time instructors: ${nashvilleSoftwareSchool.instructors.partTime[0]} and ${nashvilleSoftwareSchool.instructors.partTime[1]}`);
//#2
console.log(`Full-time instructors: ${nashvilleSoftwareSchool.instructors.fullTime}`);

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
}

//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.
He was born in ${beatles.members[1].birth}.
He contributed heavily to the ${beatles.albums[3]} album`);