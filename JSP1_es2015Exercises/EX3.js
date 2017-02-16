//3
//A


function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }.bind(this)
    );
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

// With Arrow Function:

function NumbersARR(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(val => {
        if (val % 5 === 0) {
            this.fives.push(val)
        }
    }
    )
};

var numbers2 = new NumbersARR([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers2.fives);

//B

var counter = {
    count: 0,
    inc: () => this.count++
}
var func = counter.inc;
func();
console.log(counter.count);
counter.inc();
console.log(counter.count);

//4

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);

//5


function firstName(x, y, bool, z, stringS, arrayNum, date, obj) {
    return `
Sum: ${x + y}
rest value 1 is a: ${bool.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${stringS.constructor.name}
rest value 4 is a: ${arrayNum.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}
`


}



console.log(firstName(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(firstName(5, 2, ...restParams));

var chars = [...firstName(5, 2, ...restParams)];
console.log(chars);

//6

let fName = "Kurt";
let lastName = "Wonnegut";
let age = 98;

let obj = { fName, lastName, age };

console.log(obj);

//7
//A

[firstName, lastName] = [lastName, firstName];

console.log(`First: ${firstName}, Last: ${lastName} `);

//B

function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

function oneLiner() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}


var {lastName, phone} = oneLiner();

console.log(lastName, phone);

//9
//A
class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return ` This is the Color: ${this.color} `;
    }
}


let first = new Shape('Yellow');
console.log(first.toString());

first.setColor('Green');

console.log(`Getter: ${first.color}`);

//B

class Circle extends Shape {
    constructor(color, radiusfield) {
        super(color);
        this.radiusfield = radiusfield;
    }

    getArea() {
        return Math.pow(this.radiusfield, 2) * Math.PI;
    }

    getPerimeter() {
        return 2 * this.radiusfield * Math.PI;
    }

    getRadiusField() {
        return this.radiusfield;
    }
    setRadiusField(radius) {
        this.radiusfield = radius;
    }
}

let cir = new Circle('Blue', 5);

console.log(`Radius: ${cir.getRadiusField()}
Area: ${cir.getArea()}
Perimeter: ${cir.getPerimeter()}`);


//C

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this.height = height;
    }
    getPerimeter() {
        return undefined;
    }

    getVolume() {
        return this.height * Math.PI * Math.pow(this.radiusfield, 2);
    }
    get getRadiusField() { return this.radiusfield };
}

let cyl = new Cylinder("Red", 2, 3);


console.log(cyl.getVolume());

console.log(cyl.radiusfield);


//11

function makeNames() {
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];

    while (true) {
        let ran1 = Math.floor((Math.random() * 4) + 1);
        let ran2 = Math.floor((Math.random() * 4) + 1);
        let person = yield {fName: firstNames[ran1], lName: lastNames[ran2]};
    }

}


let index = 0;
for (let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}

