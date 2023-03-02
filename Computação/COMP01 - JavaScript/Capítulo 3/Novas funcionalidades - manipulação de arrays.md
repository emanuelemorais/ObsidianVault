
Laço for ... of
	Itera por valores de um array (se usar for ... in ele irá passar a posição, não o valor)

Objeto @@iterador
	Esse objeto é uma forma de iterar um array de maneira mais dinâmica, o que possibilita o acesso de valores como values e keys
	
```
let iterador = numbers[Symbol.iterador]();
console.log(iteraodor.next().value) 

//Isso faz acessar o valor iterado um a um. Assim caso queria printar um array de 15 elementos é necessário escrever 15 vezes.
```

- Método entries, keys e values
	- Entries
	Esse método contêm pares de key/value. Assim, ao usa-lo em uma array sua posição será o key e seu valor o value.
	```
	let theEntries = numbers.entries();
	console.log(theEntries.next().value);
	
	//também será necessário repetir o código caso        queria saber todos os keys e value. uma alternativa a isso é:
	
	let theEntries = numbers.entries();
	for(let n of theEntries){
		console.log(n);
	}
	```

- Keys e Values
	"Key" acessa as chaves e possui um propriedade chamada "done" que informa se aquele é ultimo elemento do array.
	"Value" faz a mesma coisa, porém para os valores em si.
	```
	const aKeys = numbers.keys();
	console.log(aKeys.next()) //{value: 0, done: false}
	
	
	const aValues = numbers.values();
	console.log(aValues.next()) //{value: 1, done: false}
	```

- Método from
	Sua utilidade é criar um array a partir de outro já existente. Por exemplo, caso queira copiar um array é possível:
	```
	let numbers2 = Array.from(numbers);
	```
	Também é possivel passar uma função que realiza condições
	```
	let condição = Array.from(numbers, x => (x % 2 ==0));
	```

- Método of
	Irá criar um array a partir dos argumentos passados.
	```
	let numbers3 = Array.of(1, 2, 3); //[1, 2, 3]
	```

- Método fill
	Esse método preenche um array com um valor. Elel funciona da segunte forma ```numbers.fill(numeroQueIrácolocar, indiceDeInicio, indiceFinal (não inclusivo);``` também é possível criar um array inicializando valores como ```let ones = Array(6).fill(1); //[1, 1, 1, 1, 1, 1]``` . Em resumo, essa função preenche com o que é mandado.

- Método copyWithin
	Irá copiar parte de um array para outro. Veja o exemplo:
	``` 
	meuArray = [1, 2, 3, 4, 5, 6];
	let novoArray = meuArray.copyWithin(2, 2, 5);
	```

- Ordenação de elementos
	- Método reverse: irá deixar um array ao contrario, ou seja, o que está no início irá para o final. ```meuArray.reverse();```
	- Método sort: Irá organizar um array contando todos os argumentos como strings
		```
		let numerosOrdenados = numbers.sort(); 
		//o sort ordena os valores de acordo com o código unicode, então é necessário passar uma função de comparação
		console.log(numerosOrdenados);
		let numerosOrdenados2 = numbers.sort((a, b) => a - b); 
		//Irá ordenar de forma crescente pois quando a for maior que b, o resultado será positivo e quando b for maior que a, o resultado será negativo
		console.log(numerosOrdenados2);
		```
	- Ordenação personalizada: Em casos que temos objetos com diversas caracteristicas é possível criar funções que organizam de acordo como o que for preciso. 

- Ordenação de strings
	Usar o método sort por sí só não irá funcionar corretamente me todos os casos pois este utiliza os valores do ASCII. Assim, se utilizar somente o sort letras maiusculas e minusculas terão distinção e não iremos alcançar o resultado esperado. Para resolver isso existe uma função chamada localeCompare que irá análisar da forma correta, ou seja, sem distinção de maiusculas, minusculas e acentos. (Passar essa última função citada como argumento do sort)
	```
	let names = ['Ana', 'Aná', 'ana', 'john', 'Jóhn', 'John'];
	names.sort((a, b) => a.localeCompare(b)); //Isso restornará [ 'ana', 'Ana', 'Aná', 'john', 'John', 'Jóhn' ]
	```
	