

var obj1={name:"Person1", age:5};
var obj2={age:5, name:"Person1"};

var compare = true;

for (var key in obj1) {
  if (obj1[key] !== obj2[key]) {
    compare = false;
  }
}

console.log(compare);

