- If e Else
		Tem o funcionamento tal qual outras linguens. Vale ressaltar que é possível criar condição de uma parte do código ser acessada somente se a condição no if for true. 
		
	- Operadores ternários:
	
		```
		if (num === 1):
			num--;
		else:
			num++;
		```

		Isso é a mesma coisa de:
	
		```
		(num === 1) ? num-- : num++;
		```
	

- Switch
		É usado quando a comparação que está sendo feita é a mesma da anterior porem com valores diferentes
		
	```
	var month = 2;
	switch(month){
		case 1:
			console.log("Janeiro");
			break;
		case 2:
			console.log("Fevereiro");
			break;
		default:
			console.log("Nenhuma das opções");
	}
	```

