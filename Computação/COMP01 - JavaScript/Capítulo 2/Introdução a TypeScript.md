O TypeScript foi criado para que desenvolvedores conseguissem potencializar o JavaScript. Um de seus principais recursos é a possibilidade de usar tipagem em variáveis, uso de interfaces e propriedades privadas. No fim, o TypeScript compita todo o código em JavaScript.

- Instalação do TypeScript:
	```
	npm install -g typescript
	
	//compilador:
	tsc hello-world
	```

- Tipagem de variáveis
	A principal função de uma tipagem de variável é reduzir a possibilidade de erros, pois ao criar uma variável vazia em JavaScript essa poderá receber qualquer tipo de variável. Já com typescript é possível indicar o que será recebido ao criar uma variável vazia.
	
	```
	let language: string;
	```

- Duck typing (tipagem de pato)
	Se algo parece com um pato, deve ser um pato. A mesma coisa acontece para variáveis e recurosos em TypeScript, quando um dado se comporta como outro não irá gerar erros. Ex.: pg 75.