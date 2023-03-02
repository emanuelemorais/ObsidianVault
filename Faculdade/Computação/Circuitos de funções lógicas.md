
### Conveções utilizadas

1: Ligado/Fechado
0: Desligado/Aberto

### Representação em circuitos de funções lógicas

- **E:** Só de torna verdade se todos os "componentes" são verdadeiros (sinal multiplicação)

	Isso pode ser bem respresentado por um circuito de duas chaves, pois apenas com ambas as chaves fechadas será possível chegar energia em S (imagem abaixo).

	![[Pasted image 20230216143200.png]]

	A representação acima pode ser respresentada pela imagem abaixo e possui a tabela verdade ao lado
	
	![[Pasted image 20230215144239.png]]


- **OU**: Se torna verdade se pelo menos um for verdade. (+)
	O sistema ou irá assumir o valor 1 quando pelo menos uma das chaves estiverem fechadas.
	![[Pasted image 20230216143724.png]]

	A representação de OU é vista na imagem abaixo e possui a tabela verdade ao lado

	![[Pasted image 20230215144313.png]]
	
- **Negação**: Nega os "componentes" análisados.
	A negação irá mudar o resultado que chega para ela, por exemplo, caso chegue um 1, ao passar pela negação se tornará 0.
	
	![[Pasted image 20230216143855.png]]

	![[Pasted image 20230215144327.png]]

- **NAND**
	É uma associação de "E" e "NÃO" e irá inverter o sinal lógico de "E". Assim, a tabela verdade é invertida.
	
	![[Pasted image 20230215151204.png]]

- **NOR**
	É uma associação de "OU" e "NÃO" que altera o valor lógico das saídas.
	
	![[Pasted image 20230215151137.png]]


### Circuitos combinacionais

- Para entender o funcionamento de circuitos combinacionais é possível verificar o seguinte exemplo:

![[Pasted image 20230223200131.png]]

Nessa expressão é visto que a soma de dois produtos que deve ser realizada a partir de uma orta **OR** de duas entradas. O primeiro produto "AB" deve passar por um **AND** e depois invertido por uma porta **NOT**. Já o segundo produto deve negar B e depois passar por uma porta dupla **AND**. O último passo para termar a expressão é os resultados passarem por uma porra **OR**.

![[Pasted image 20230223200458.png]]




- Para resolver combinações é possivel fazer como se fosse uma expressão matemática como no exemplo abaixo.

![[Pasted image 20230216144901.png]]


![[Imagem do WhatsApp de 2023-02-15 à(s) 14.58.49.jpg]]


