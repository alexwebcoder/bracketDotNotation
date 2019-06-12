let obj = {
  
  cat: "meow",
  dog: "woof",
  bird: "tweet",
  dogA: "arf"
};

//with bracket notation, we can use variables to access strings in an object
//dog is a variable with the value of cat

let dog = "cat";

//since we are using brackets, the string value is passed in and we search for the cat property and log meow
let sound = obj[dog];

console.log(sound);

//does not work the same way with dot notation

let dogA = "cat";

let newSound = obj.dogA;

console.log(newSound);//logs arf and not meow because we can not use variables with dot notation

// When you're using a variable to represent the key of an object instead of the actual name of the key, you can't reference the key using 'dot' notation; you must use 'square bracket' notation. 

//more on dot and bracket notation

let cat = {
  
  "property1": "meow",
  "property2": "hiss"
  
  
};

console.log(cat.property1);//meow
console.log(cat["property1"]);//meow

let X = "property2";
console.log(cat.property2);//hiss

console.log(cat.X);//undefined (does not log a value, because it is looking for an X property on the cat object)

console.log(cat[X]);//hiss Works without putting strings aroung the X, like I did with cat["property1"] If I were to put quotes (cat["X"]), it would log undefined, unless I had the property in the object like property1 is already.

//in a JS object, all property keys are strings. 
//can't use dot notation on variables
// JS evaluates the first complete expression with square brackets in a statement, runs toString() on it to convert it into a string and then uses that value for the next bracket expression, on down the line till it runs out of bracket expressions.

let dogTwo = {

  "attribute1":"loving",
  "attribute2":"trueblue",
  "attribute3":"they are sneaky"
};


cat["loving"] = "something cats are not.";
cat["they are sneaky"] = "they are really sneaky";

//we cannot access the cats value of "something cats are not" using dot notation
//cat.dogTwo.attribute1 throws an error. dogTwo is not an attribute of cat, so this will not work with dot notation. We can only move down an object's property tree by way of its explicit property keys

//this will log with bracket notation. JS sees the opening brackets and keeps going until it reaches the first closed bracket. it sees attribute1 of the dogTwo object and sees the value of "loving". Next it looks to see the value of the "loving" property of the cat object and logs "something cats are not"

let newDogTwo = dogTwo;
let attr = "attribute1";

console.log(cat[dogTwo["attribute1"]]);//something cats are not.
console.log(cat[dogTwo["attribute3"]]);//they are sneaky.

console.log(cat[newDogTwo[attr]]);

//example of storing things by value. when we access the variable cb, we are not looking up in our code and referencing box.material, we are looking in memory at whatever value, box.material is returning. since box.material is returning cardboard, cb is only storing "cardboard" with no reference to box.material.

// let box = {};
// box.material = "cardboard";
// let cb = box.material;
// console.log(cb); //cardboard
// box.material = "titanium";
// console.log(cb);//cardboard


// let box = {};
// box["material"] = "cardboard";
// let key = "material";
// console.log(box[key]);
//cardboard

let box = {};

box["material"] = "cardboard";

let key = "material";

console.log(box[key]);
//cardboard. this one logs because we are not using quotes around key
console.log(box["key"]);
//returns undefined because it is using bracket notation with quotes
console.log(box.key);
//returns undefined 
//dot notation is equivelant to using bracket notation with quotes
//the two logs above are looking up a property called key on the object box, which doesn't exist.

//dot notation requires a string. bracket notation can use strings, weird characters, variables, numbers, expression (stings and weird characters require quotes)