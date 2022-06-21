const nullArray = []
const moreFiveChar = new Array(6)
console.log(moreFiveChar.length)
console.log(countries[0])
console.log(countries[countries.length - 1])
console.log(countries[(countries.length + 1) / 2])

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
itCompanies.forEach(company => console.log(company))
itCompanies.forEach(company => console.log(company.toUpperCase()))

const lastCompany = itCompanies.slice(itCompanies.length - 1, 1).join()
const allCompanies = itCompanies.slice(0, itCompanies.length).join(', ')
const companiesText = allCompanies + ' and ' + lastCompany + ' are big IT companies.'

console.log(itCompanies)

for (const company of itCompanies) {
    company.indexOf('oo') != -1
        ? console.log(company)
        : console.log('değil')
}

console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
console.log(itCompanies)

if (itCompanies.length % 2 !== 0) {
    console.log(itCompanies.splice((itCompanies.length - 1) / 2, 1))
}
else {
    console.log(itCompanies.splice((itCompanies.length - 1) / 2, 2))
}

console.log(webTechs)

let textToArr = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const convertArr = textToArr.replace(/[^a-z\s]/gi, '').split(' ')

console.log(convertArr)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}
console.log(shoppingCart)
if (shoppingCart.includes('Tea')) {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
}
console.log(shoppingCart)

if (countries.includes('Ethiopia')) {
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
}
else {
    countries.push('Ethiopia')
}

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
}
else (
    webTechs.push('Sass')
)
console.log('Sass')

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(Math.min(...ages))
console.log(Math.max(...ages))

console.log(countries.slice(0, 10))
console.log(countries)
const firstHalfCountries = [], secHalfCountries = []
if (countries.length % 2 !== 0) {
    // console.log(countries.splice((countries.length - 1) / 2, 1))
    for (i = 0; i < (countries.length + 1) / 2; i++) {
        firstHalfCountries.push(countries[i])
    }
    for (j = (countries.length + 1) / 2; j < countries.length; j++) {
        secHalfCountries.push(countries[j])
    }
}
else {
    // console.log(countries.splice((countries.length - 1) / 2, 2))
    for (i = 0; i < countries.length / 2; i++) {
        firstHalfCountries.push(countries[i])
    }
    for (j = countries.length / 2; j < countries.length; j++) {
        secHalfCountries.push(countries[j])
    }
}

console.log(firstHalfCountries)
console.log(secHalfCountries)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const entries = Object.entries(users)
console.log(entries)

const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
  ]

const [frontEnd1, backEnd1] = fullStack1
console.log(frontEnd1)
const [first, second, third, fourth]= frontEnd1
console.log(first, second, third, fourth)
  
for (const [first, second, third, fourth] of fullStack1) {
    console.log(first, second, third, fourth)
}

// const rectangle = {
//     width: 20,
//     height: 10,
// }
  
// let { width, height } = rectangle
// console.log(width, height) // 20, 10

const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
  ]
  
for (const { lang, count } of languages) {
    console.log(`The ${lang} is spoken in ${count} countries.`)
}

const rectangle = { width: 20, height: 10 }
const calculateArea = ({ width, height }) => width * height
const calculatePerimeter = ({ width, height }) => 2 * (width + height)

console.log(calculateArea(rectangle))
console.log(calculatePerimeter(rectangle))

