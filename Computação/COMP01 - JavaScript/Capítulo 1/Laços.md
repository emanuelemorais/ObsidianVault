Os laços possuem o mesmo funcionamento que em outras linguagens.

Estrutura do *for*:

```
	for(var i = 0; i<10; i++){
		//comando aqui
	}
```

Estrutura do *while*: (While funciona enquanto a condição for verdadeira)

```
	var i = 0
	while(i<10){
		//comando aqui
		i++;
	}
```

Existe uma condição muito parecida com while chamada *do ... while*. A unica diferença é que a condição só sera acessada depois, o que torna obrigatório que, pelo menos uma vez, o código seja executado.

```
	var i = 0
	do{
		//comando aqui
		i++;
	} while (i<10);
```