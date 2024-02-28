// caleb's solution
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		return other.age > this.age ? `${other.name} is older than me.` : other.age < this.age ? `${other.name} is younger than me.` : `${other.name} is the same age as me.`
	}
}

let me = new Person('caleb', 28);
let taylor = new Person('taylor', 27);
let randy = new Person('randy', 28);
let meme = new Person('meme', 84);

console.log(me.compareAge(taylor)) //  caleb is older than taylor
console.log(me.compareAge(meme)) // meme is older than caleb
console.log(me.compareAge(randy)) // randy is the same age as caleb

// er0s's solution

// class Person {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}
		
// 	compareAge(other) {
// 		let i = Math.sign(other.age - this.age),
// 				x = ["the same age as", "older than"][i] || "younger than";
// 		return `${other.name} is ${x} me.`;
// 	}
// }

// cool trick/interesting approach.
// Math.sign returns either postive 1 if int returned is positive, negative -1 if negative, 0 if 0, -0 if -0

// let i = Math.sign(27-28),

// if i is not positive, than x = younger than
// x = ["the same age as", "older than"][i] || "younger than";
