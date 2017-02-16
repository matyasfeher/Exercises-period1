//Callbacks
// 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var filteredNames = names.filter(function(name){
return name.length <=3;
});
console.log(filteredNames);

var mappedNames = names.map(function(name){
    return name.toUpperCase();
});
console.log(mappedNames);

//2
function  myFilter(array, callback){
    var returnArray = [];
    array.forEach(function (value, index) {
        if (callback(value) === true) {
            returnArray.push(value);
        }

    });
    return returnArray;
};

//3
Array.prototype.myFilter = function (callback) {
    let arrayToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {
        let prob = this[i];
        if (callback.call(1, prob) === true) {
            arrayToReturn.push(this[i]);
        }
    };

    return arrayToReturn;
};

Array.prototype.myMap = function (callback) {
    let arrayToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {
        let current = this[i];
        let newProp = callback.call(1, current);
        arrayToReturn.push(newProp);
    }
    return arrayToReturn;

};


//4
var listItems = names.map(function(name){
return "<li>" + name + "</li>";
});

console.log("<ul>"+listItems.join() +"</ul>")

var persons = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone:
"675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var mappedPersons = persons.map(function(person){
return person.name + ", " + person.phone;
});

console.log(mappedPersons);


//Objects
//1
var person = {name: "Lajos", age:62, hobby: "stampcollecting", hasBirthday: false};

for(var property in person){
    console.log(property);
};
console.log(person.hasOwnProperty("hobby"));
delete person.hobby;
console.log(person.hasOwnProperty("hobby"));

//2
function Person(name, birth, hobby, mail) {
    var name = name;
    var birth = birth;
    var hobby = hobby;
    var mail = mail;

    return{
    getDetails: function () {
        return name + ", " + birth + ", " + hobby + "," + mail;
    }
 }
}