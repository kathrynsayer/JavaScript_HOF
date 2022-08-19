console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num1) {
    return function (plusNumber) {
        return plusNumber + num1

    }
}
let plus15 = plus(15)

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
        name: "Frodo",
        age: 50,
        score: 85,
        isActive: false,
    },
    {
        name: "Sam",
        age: 38,
        score: 94,
        isActive: true,
    },
    {
        name: "Merry",
        age: 36,
        score: 82,
        isActive: true,
    },
    {
        name: "Pippin",
        age: 26,
        score: 77,
        isActive: false,
    },
];

users.forEach((item) => {
    console.log(item.name, item.age, item.score, item.isActive);
}
)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let nameScore = users.map((item) => {
    return {
        name: item.name, score: item.score
    };
})

console.log(nameScore); 

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

