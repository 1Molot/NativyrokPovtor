const names = ['Donald', 'Alex', 'Bob']
console.log(names.sort())
//1.сортирует строки из коробки
//метод sort не создает новых массивов,сортирует и вовзвращает новую длинну массива
const names_2 = ['Donald', 'alex', 'aLEX', 'игорь', 'Юрий']
console.log(names_2.sort())
//2.сортировка строки типа по алфавиту(за главные и английские первые)(unicode)
console.log(names)
//3.работает мутабельно (сортирует массив на месте)
console.log(names.sort() === names)   //(true)
//4.Возвращает ссылку на исходный массив

const nums = [1000, 333, 9999, 77, -3]  //числа сортировать не может,сортирует по (unicode)(unicode-таблица)
console.log(nums.sort())
//5. Для остальных случаев необходимо передать функцию (callback)
const compFunc = (a, b) => {  // по возрастанию
    if (a > b) {  //надо поменять местами,>0
        return 10  //сравнивается с нулем,математика
    } else {
        return -1
    }
}
// const compFunc = (a, b) => a - b //Джедайская форма
// console.log(nums.sort(a,b) => a - b ) без реверса
// console.log(nums.sort(a,b) => a - b ).reverse()) c реверсом сорт
console.log(nums.sort(compFunc)) //[-3, 77, 333, 1000, 9999]
console.log(nums.reverse())    //разворачивает массив
//6.Функция сравнения должна возвращать число больше или меньшее 0
//7.В месте с sort часто используется revers
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
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
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];
const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 10
    } else {
        return -10
    }
}
// console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.LocaleCompare(b.name)))
//8.Сортировка массива обьектов по строковым значениям

console.log(students.sort((a, b) => a.age - b.age))
//9.Сортировка массива обьектов по числовым значением

//bubble sort  //temp копия(стакан для переливания)

const nums_2 = [100, 333, 999, 77, -3]
// так не правильно, нужно будет копировать данный код
// for (let i = 0; i< nums_2.length; i++) {
//     if(nums_2[i] > nums_2[i+1]) {
//         let temp = nums_2[i+1]
//         nums_2[i+1]=nums_2[i+1]
//         nums_2[i+1]=temp
//     }
// }
// так  правильно
// for (let j = 0; j < nums_2.length; j++) {
//     for (let i = 0; i < nums_2.length; i++) {
//         if(nums_2[i] > nums_2[i + 1]){
//             let temp = nums_2[i + 1]
//             nums_2[i + 1] = nums_2[i]
//             nums_2[i] = temp
//         }
//     }
// }
let count = 0
let replace = 0
//-1 , -j (оптимизация) в данном коде на 105 строке
for (let j = 0; j < nums_2.length - 1; j++) {
    // let isSorted = true
    for (let i = 0; i < nums_2.length - 1 - j; i++) {
        count++
        if (nums_2[i] > nums_2[i + 1]) {
            replace++
            // let temp = nums_2[i + 1]
            // nums_2[i + 1] = nums_2[i]
            // nums_2[i] = temp
            [nums_2[i],nums_2[i+1]]= [nums_2[i+1],nums_2[i]]
            //современный метод
            // let isSorted = false
        }
    }
    // if (isSorted) break
}
//count(счетчик)
console.log(count)
console.log(replace)
console.log(nums_2)