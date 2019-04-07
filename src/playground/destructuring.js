// Object Destructuring

// const person = {
//     age: 21,
//     location: {
//         city: 'Philadelphia',
//         temp: 30
//     }
// }

//Create a local const with default value of 'Anonymous'
// const { name: firstName = 'Anonymous', age } = person

// //const name = person.name
// //const age = person.age

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)


// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [ , city, state = 'New York' ] = address

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$ 2.00', '$ 2.50', '$ 2.75']

const [ itemName, , medium, ] = item

console.log(`A medium ${itemName} costs ${medium}`)