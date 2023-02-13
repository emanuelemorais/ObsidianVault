Arrow functions é uma maneira de simplificar (ou complicar kkk) o código. Ao criar uma arrow functions é possivel omitir a palavra function.

Exemplo de função normal:

```
const area = function areaCirculo(r){
	var calculo = 3.14 * r * r;
	return area;
};
```

A mesma função, mas agora com arrow function:

```
const area = r => {
	var calculo = 3.14 * r * r;
	return area;
}
```

Ainda mais, se a função possuir apenas uma instrução:

```
const area = r => 3.14 * r * r
```

Por último, se a função não recebe nenhum argumento, pode ser escrita:

```
const hello = () => console.log('hello')
```

