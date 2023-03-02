//Estudo sobre funções de iteração

function isEven(x){
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//metodo every
console.log("Método every:")
numbers.every(isEven); // 1

//metodo some
console.log("Método some:")
numbers.some(isEven); //1 2

//metodo forEach
console.log("Método forEach:")
numbers.forEach(isEven); //1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

//metodo map
console.log("Método map:")
const myMap = numbers.map(isEven);
console.log(myMap); //[false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]

//metodo filter
console.log("Método filter:")
const myFilter = numbers.filter(isEven);
console.log(myFilter); //[2, 4, 6, 8, 10, 12, 14]

//metodo reduce
console.log("Método reduce:")
const myReduce = numbers.reduce((total, current) => total + current);
console.log(myReduce); //120

//metodo de iteração for...of
console.log("Método for...of:")
for (let number of numbers){
    console.log(number);
}

//metodo de iteração for...of
console.log("Método for...of:")
for (let number of numbers){
    console.log(number);
}

//metodo de entries, keys e values
console.log("Método entries:")
let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
//colocar até 15 para ver todos os valores

console.log("Método keys:")
let aKeys = numbers.keys();
console.log(aKeys.next().value);
//colocar até 15 para ver todos os valores

console.log("Método values:")
let aValues = numbers.values();
console.log(aValues.next().value);
//colocar até 15 para ver todos os valores

//Método from
console.log("Método from:")
let numbers2 = Array.from(numbers);
console.log(numbers2);

//Método of
console.log("Método of:")
let numbers3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers3);

//Metodo fill
console.log("Método fill:")
let numbers4 = Array(10).fill(0); //criou um array de 10 posições com valor 0
console.log(numbers4);
numbers3.fill(1, 2, 6); //preencheu o array com 1, começando na posição 2 e terminando na posição 6 (não inclusiva)
console.log(numbers3);

//Metodo copyWithin
console.log("Método copyWithin:")
meuArray = [1, 2, 3, 4, 5, 6];
let novoArray = meuArray.copyWithin(2, 2, 5);
console.log(novoArray);


//Ornadação de arrays
console.log("Método reverse:")
let numerosInvestidos = numbers.reverse();
console.log(numerosInvestidos);

console.log("Método sort:")
let numerosOrdenados = numbers.sort();
console.log(numerosOrdenados);
//o sort ordena os valores de acordo com o código unicode, então é necessário passar uma função de comparação
let numerosOrdenados2 = numbers.sort((a, b) => a - b); //Irá ordenar de forma crescente pois quando a for maior que b, o resultado será positivo e quando b for maior que a, o resultado será negativo
console.log(numerosOrdenados2);


//Ordenação personalizada
console.log("Ordenação personalizada:")
const friends = [{name: 'John', age: 30}, {name: 'Ana', age: 20}, {name: 'Chris', age: 25}];
function comparePerson(a, b){
    if (a.age < b.age){
        return -1;
    }if (a.age > b.age) {
        return 1;
    }
    else{
        return 0;
    }
}
console.log(friends.sort(comparePerson));


let names = ['Ana', 'Aná', 'ana', 'john', 'Jóhn', 'John'];
names.sort((a, b) => a.localeCompare(b));
console.log(names);