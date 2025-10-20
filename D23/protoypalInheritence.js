let parent = {
    name : "parent",
    age : 22,
    houseNo : 333
}

let child = {
    name: "child",
    age :"12"
}

child.__proto__ = parent

console.log(child.houseNo)