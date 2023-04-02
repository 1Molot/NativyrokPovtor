let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
const getName = st => st.name
const getNames = (array) => {
    const result = []
    const getName = st = st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = getName(array[i])
        result[i] = newValue
    }
    return result
}

const getScores = (array) => {
    const result = []
    const getStScores = st => st.scores
    for (let i = 0; i < array.length; i++) {
        const newValue = getStScores(array[i])
        result[i] = newValue
    }
    return result
}

const sMap = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map(getName))
console.log(sMap(students, getName))

function sFilter(func){
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i]) === true) {
            result.push(this[i])
        }
    }
    return result
}
Array.prototype.sFilter = sFilter

console.log(students.sFilter(st => st.scores >= 100))
console.log(students.filter(st => st.scores >= 100))


const sPop = (array) => {
    let lastElement = array[array.length - 1]
    array.length = array.length - 1
    return lastElement
}
console.log([].push(3))

console.log(students)
console.log(students.length)
console.log(students[students.length - 1])

const array = [1, 2, 3, 4]
const c = ""
const sPop = (array, c = ',') => {
    let string = ""
    for (let i = 0; i < array.length - 1; i++) {
        string += (array[i] + c)
    }
    return string + array[array.length - 1]
}

console.log(sPop(array))

const sPush = (array,el) => {
    array[array.length] = el
    return array.length
}
console.log(sPush(array))

const sJoin = (arr,elem = '') => {
    let str = "";
    for (let i = 0; i < arr.length -1; i++) {
        str += arr[i] + elem;
    }
    str += arr[arr.length -1];
    return str;
}
console.log(sJoin([1,2,5, 'qwerfe'], '--'));


const sPop = (array,el) => {
    array[array.length] = el
    return array.length
}