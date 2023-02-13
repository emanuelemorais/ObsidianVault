Deixar valores default em uma função é, de forma simplifica, deixar um valor pré definido quando não são passados argumentos da função. No ECMAScript 2015 é feito da seguinte maneira:

```
function minhaFunção(x=2, y=1, z=0){
	var resultado = x + y + z;
	return resultado;
}

minhaFunção() // Ao chamar a função será exibido o resultado default, ou seja, 3
minhaFunção(z=4) //Exibirá t como resultado e o restante dos dados será padrão
```