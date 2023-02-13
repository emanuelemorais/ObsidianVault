A função de um array é armazenar valores do mesmo tipo, sequencialmente. É importante ressaltar que javascript permite a criação de um array com valores distintos mas por boa prática não é recomendavel.

- *Criar* um array em javascript é muito fácil, passa isso é preciso apenas ``` let newArray = [];```
- *Acessar* um tamanho de array também é bem simples ``` console.log(newArray.legth);```
- Para adicionar elementos novos em um array é possivel fazer ``` newArray[1] = valor;``` para indicar em que posição deseja colocar ou usar ``` newArray.push(valor);```  para que seja acrescentado em sequencia do útimo valor adicionado.
- Adicionar um número no inicio do array, deslocando todos os números já adicionados para frente é tão fácil quanto usar o método ``` newArray.unshift(-1);``` . Após isso o valor passado estará na posição 0 do array. Para adicionar varios elementos no meio ou em posições especificas é possível usar ``` .splice(indice, quantos elementos serão removidos (pode colocar 0), itens a serem acrescentados);```
- Remover informações de um array é tão fácil quanto usar o metodo ```.pop(valorRemovido);``` para tirar um valor do final ou ```.shift()``` para excluir o primeiro item. Além disso existem o método ``` .splice(indice, quantos elementos serão removidos)``` para retirar itens do meio do array.
- Em javascript é possível criar arrays multidimencionais, basicamente é uma estrutura de arrays com arrays dentro.

[[Métodos nativos de arrays]]