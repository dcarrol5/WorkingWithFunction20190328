var name = "Other Bruce";

const bruce = {
    name: "Bruce",
    bruceGreet: function () {
        console.log(name);
        this.name = "This.Bruce"
        return `Hello ${this.name}`;
    }
};

console.log(bruce.bruceGreet());


var bruceCopy = bruce;
var x = 10;
var y = x;
y = 11;

this.

    bruceCopy.name = "BigBruce";

console.log(bruce.greet());
const madeline = { name: "Madeline" };
function greet() {
    return `Hello ${this.name}`;
}
madeline.madelineGreet = greet;
console.log(madeline.madelineGreet());
console.log(greet());
