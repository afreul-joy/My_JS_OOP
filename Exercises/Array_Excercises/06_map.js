const data = [
  {
    name: "Babita Ji",
    height: 150,
    mass: "49",
    eye_color: "grey",
    gender: "female",
  },
  {
    name: "Krishnan Iyer",
    height: 168,
    mass: "84",
    eye_color: "black",
    gender: "male",
  },
  {
    name: "Alice",
    height: 165,
    mass: "55",
    eye_color: "blue",
    gender: "female",
  },
  {
    name: "Bob",
    height: 175,
    mass: "70",
    eye_color: "brown",
    gender: "male",
  },
];

//1: Get an array of all names
const names = data.map((person) => {
  return person.name;
});
// console.log(names)

//2: Get an array of objects with just name and height properties
const properties = data.map((person) => {
  return {
    name: person.name,
    height: person.height,
  };
});
// console.log(properties)

//3: Get data with mass greater than 100
const mass = data.filter((person) => {
  const massInt = parseInt(person.mass);
  return massInt < 60;
});
// console.log(mass);

//3: Get all male properties
const male = data.filter((person) => {
  return person.gender === "female";
});
// console.log(male);

//4: sort by gender
const sortByGen = data.sort((a, b) => {
  const x = a.gender.toLowerCase();
  const y = b.gender.toLowerCase();

  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(sortByGen);

// 5: sort by names
const sortByName = data.sort((a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();

  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(sortByName);

//6: Get total height of all data
let totalHeight = 0;
for (let i = 0; i < data.length; i++) {
  totalHeight = totalHeight+ data[i].height;
}

// console.log("Total Height:", totalHeight);

const eyes = data.filter((item)=>{
  return item.gender==='male'
})
console.log(eyes);
