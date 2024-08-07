"use strict";
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua"
// };

// class ClassName {
//     constructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1", "arg2");

//Functions
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// };
//object.
//let dog  = new Dog("Jacky", 30, "brown", "labrador");

//class
// class Dog {
//     constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//     }
// };
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

// console.log(dog.dogName," is a ",dog.breed," and weighs ",dog.weight);

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
// };, LastNa
// let p = new Person("Maaike", "van Putten");
// alert(p.firstname + p.lastname);

// class Person {
//     constructor(firstName, LastName){
//         this.firstName = firstName;
//         this.LastName = LastName;
//     }
//     greet(){
//         alert(`Hi ${friend.firstName} ${friend.LastName}`)
//     }

//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//         }
// };

// let friend = new Person("Vukosi", "Djija");

// //alert(`Hi ${friend.firstName} ${friend.LastName}`);
// friend.greet();

// let compliment = p.compliment("Harry","hat");
// console.log(compliment)

// class Person {
//     constructor(firstName, LastName){
//         this.firstName = firstName;
//         this.LastName = LastName;
//     }
//     fullName(){
//         alert(`Hi ${friend.firstName} ${friend.LastName}`)
//     }

//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//         }
// };

//Exercise 7.1

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// };

// let obj = new Person("Boitumelo","Lefophane");
// let obj2 = new Person("Vukosi","Djija");
// console.log(obj.firstName);
// console.log(obj2.lastName);

//Exercise 7.2
// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullName(){
//         return this.firstName +" "+ this.lastName;
//     };
// };

// let obj = new Person("Boitumelo","Lefophane");
// let obj2 = new Person("Vukosi","Djija");
// console.log(obj.fullName());

//Exercise 7.3

// class Sounds {
//   constructor(animal, sound) {
//     this.animal = animal;
//     this.sound = sound;
//   }
//   speak() {
//     console.log(this.animal + " " + this.sound);
//   }
// }

// Sounds.prototype.eat = function () {
//   return this.animal ;
// }
// let cat = new Sounds("cat", "meow");
// let dog = new Sounds("dog", "bark");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);
