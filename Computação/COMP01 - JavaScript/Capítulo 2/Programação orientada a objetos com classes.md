- Classes
O ES2015 introduziu em na linguagem uma maneira mais limpa de declarar classes. 

Exemplo de era anteriormente:
```
function Book(title, pages){
	this.title = title;
	this.pages = pages;
}
Book.prototype.printTitle = function(){
	console.log(this.title);
}
```

Exemplo de como é feito na estrutura mais recente:
```
class Book{
	contructor(title, pages){ //constructor é um metodo próprio para criar o objeto
		this.title = title;
		this.pages = pages;
	}
	printTitle(){
		console.log(this.title);
	}
}
```

- Herança
Também é possível uma classe herdar uma outra e ser contruída com os mesmos argumentos. Para isso é usado a palavra *extends* para dizer qual classe está sendo herdada e *super* para para fazer referência ao constructor da outra classe.

Exemplo:
```
class ITBook extends Book{
	constructor(title, pages, technology){
		super(title, pages);
		this.technology = technology;
	}
}
```

- Get e Set
Sua principal utilidade é garantir que os dados não sejam sobrescritos. O seu uso é muito simples:
(Achei meio sem sentido a utilidade)

```
class Person{
	constructor(name){
		this._name = name;
	}
	get name(){
		return this._name;
	}
	set name(value){
		return this._name = value;
	}
}
```