//Link to the challenge: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/higher-order-functions/all-true-property-validator

function truthCheck(collection, pre) {
  return collection.every((object) => object[pre]);
}

//test 1
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

//test 2
console.log(
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")
)

//test 3
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))

//test 4
console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))