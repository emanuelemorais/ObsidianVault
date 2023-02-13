-  .concat: Junta varios arrays
	``` const zero = 0;
		let num = [1, 2, 3];
		let numeros = num.concat(zero);
	```
-  join: Junta todos os elementos do array em string
- sort
- reverse

Iterador que verifica condição: *.every e .some são uma contrária da outra*
- .every: Itera por todo o array verificando uma condição até que seja devolvido false
- .some: verifica cada item com determinada condição ate que volte true

Iterador igual for
- .forEach: Tem o mesmo efeito que um for, uma vez que, itera por cada elemento do array independente de condição

Iteradores que devolvem um novo array:
- .filter: Cria um array com todos os elementos verificados como true
- .map: Cria um array a partir de uma função que possui condição. Devolve os elementos que correspondem a esse criterio.

Método reduce:
- Utilizado para fazer operações com elementos do array
	```
	numbers.reduce((previous, current) => previous + currente)
	```


