// function Hefe(age, color, school) {
//     this.age = age;
//     this.color = color;
//     this.school = school;
// }

// Hefe.prototype.greetings = function() {
//     console.log("My name is el hefe")
// }

// var oligarch = new Hefe(30, "red", "ubunifu college");

// // ADD CUSTOMIZED FUNCTIONALITIES TO MY PERSON;

// function Me(like, addicts,age, color, school) {
// Hefe.call(this, age, color, school)
//     this.like = like;
//     this.addicts = addicts;
// }

// // CREATE A HEFE STRONG;

// Me.prototype = Object.create(Hefe.prototype);

// var hefeStrong = new Me("thick girls", "coffee", 23, "blue", "ubunifu");

// console.log(hefeStrong);
// hefeStrong.greetings();

// console.log(oligarch);
// oligarch.greetings();


// ES6 CONSTRUCTOR OBJECTS;

class ShoppingList {
    constructor(items, price) {
        this.items = items;
        this.price = price;
    }

    checkPrice(){
        console.log(this.items[1] + " " + "costs" + " " +  this.price[1])
    }
}

// APPENDING MORE INFORMATION;
class Goodone extends ShoppingList{

    constructor(country,brand,items, price) {
        super(items, price);
        this.country = country;
        this.brand = brand;
    }
}

// var lists = new ShoppingList(["Mangoes","Tomatoes"],[30, 50])
// console.log(lists);

// lists.checkPrice();

var superList = new Goodone("Egypt", "special", ["Mangoes","Tomatoes"],[300,100]);

console.log(superList);

superList.checkPrice();

// CALL BACKS;

function getData(data, callback) {
    setTimeout(() => {
        console.log("Reading data from database!");
        callback({data:data})
    },2000)
}

getData("Jimmy", function(data){
    console.log(data);
});

// ES6 PROMISES;

// const prom = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("we have our data!")
//         reject(new Error("Go fuck yourself bitch!"))
//     }, 4000);
// })

prom.then(data => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


// NORMAL OBJECTS

var person = {
    name:"keli",
    age: 30,
    height: 1.9,
    race:  "black",
    country: "kenya",
    sayHello:function() {
        console.log("good morning")
    }
}

console.log(person.country);

const {name,age,height,race,country} = person;

console.log(country);



