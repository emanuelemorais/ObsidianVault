O == é usado quando os valores podem ser considerados iguais mesmo que de tipos diferentes. Quando acontece de serem de tipos diferentes o javascript usa de funções nativas para realizar as comparações. São elas:

- toNumber(): para converter o valor para um int
	Os dados são convertidos da seguinte maneira:
	- undefined: Nan
	- null: +0
	- boolen: true = 1; false = +0
	- number: o valor do numero

- toPrimitive: Esse metodo é o acoplamento de duas funções internas do JavaScript. O primeiro é o ValeuOf() que volta o valor primitivo e se retornar null ou undefined, é utilizada a função toString(). Caso não funcione será retornado um erro.

ATENÇÃO: ao realizar uma comparação é super importante prestar atenção em que tipo de dado os valores são convertidos. 
	Ex: Sabemos que "manu" == true teoricamente seria true pois a string manu possui mais de 0 letras, porem, ao realizar essa comparação irá voltar false pois em comparação a análise se tranforma em NaN == 1.

Já o operador === é bem mais simples, se forem de tipos diferentes retorna false, agora, se forem do mesmo tipo, só retornará true se forem exatamente iguais.