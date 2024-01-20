let names = ['ivan', 'abdul', 'nikita', 'igor']

document.writeln(names[1]);//обращение ко второму элементу массива
document.writeln(names)

names[2] = 'sveta'//изменять массивы можно с помощью оператора присваивания
document.writeln(names)

//свойство length длина массива 
document.writeln(names.length)

//метод push - добавить новый элемент массива
names.push('olga')
document.writeln(names)

//перебрать элементы массива
for (let i = 0; i < names.length; i++) {
    document.writeln(names[i])
}

//в массивах можно хранить элементы любых типов поддерживаемых js
let users = [
    {
        login: 'nikita',
        password: 'rulet456'
    },
    {
        login: 'lobzik567',
        password: 'fanera345'
    },
    {
        login: 'ivan342',
        password: 'abobobf3'
    }
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
//перебрать значения свойства login - users[i].login
for (let i = 0; i < users.length; i++) {
    console.log(users[i].login)
}

//получить последний элемент массива
let fruits = ['apple', 'orange', 'banana', 'lemon']
document.writeln(fruits[fruits.length - 1])

//at
//Метод at возвращает элемент массива с заданным индексом. В параметре метода указывается целое положительное или отрицательное число. 
//В первом случае - идет поиск элемента с начала массива, во втором - с конца.
document.writeln(fruits.at(-1))

//pop() - удаление последнего элемента массива
let lastElement = fruits.pop();
document.writeln(fruits)
console.log(lastElement)

//splice - удаляет или добавляет элемент в массив
let cars = ['toyota', 'ferari', 'BMW', 'Honda']
cars.splice(2, 0, 'lada')//добавление
document.writeln(cars)
cars.splice(2, 2)//удаление
document.writeln(cars)
