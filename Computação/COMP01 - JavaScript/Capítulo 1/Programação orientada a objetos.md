
Existem duas maneiras de criar um objeto:

```
	//opção 1
	var obj = new Object()
	
	//opção 2
	var obj = {}
```

Em POO um objeto é uma instância de uma classe. Exemplo de como declarar uma classe (construtor):

```
	//classe que controi livros
	
	function Book(title, pages){
		this.title = title;
		this.pages = pages;
	}
```

Para instanciar é possivel fazer o seguinte:

```
	var book = new Book('A volta dos que não foram', 123)
```

Para acessar o valor de algo dentro do objeto é possivel fazer:
```
	console.log(book.title)
```

Além disso uma classe pode conter funções, chamadas de metodos. É possível declarar um metodo da seguinte maneira:
```
	Book.prototype.getTitle = function(){
		console.log(this.title);
	}
```