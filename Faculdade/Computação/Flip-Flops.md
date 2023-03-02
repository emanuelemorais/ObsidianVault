
### Definições gerais
- Nos flipflops as saídas são sempre opostas ou complementares. Isso quer dizer que, se Q é 1, Q (barra) será necessáriamente 0 e vice versa.
- São dispositivos de dois estados estáveis na saída que podem ser utilizados para armazenar/transferir dados;
- Podem ter os seguintes pinos: Clock, Reset (ou Clear) e Preset
- São utilizados como buffer de dados, interfaces, contadores, conversor serial-paralelo etc.

### FlipFlop R-S

- Esse tipo de dispositivo possuim dus entradas chamadas S e R e duas saídas chamadas Q e Q\
- As letras S e R representam set (inicializar) e reset (reiniciar).

![[Pasted image 20230228091803.png]]

O circuito é montado a partir da porta lógica NAND
![[Pasted image 20230228093730.png]]

![[Pasted image 20230228091724.png]]

- Linha 1: Essa chamada é proibida e não deve ser utilizada
- Linha 2: Conhecida como condição de inicialização é quando S é 0 e R é 1 (Q em 1)
- Linha 3: Condição de condição de reinicialização é visto quando S é 1 e R é 0 (Q em 0)
- Linha 4: Nessa linha irá se manter os respectivos estados anteriores. Esse estado é de manutenção

#### Diagramas de temporização
Esse diagrama representa os níveis de tensão e o intervalo de tempo de duração dos pulsos

![[Pasted image 20230228094135.png]]

#### FlipFlop R-S controlado por clock
Sua estrutura é bem parecida com R-S normal, a não ser pela entrada clock presente na estrutura.

![[Pasted image 20230228100111.png]]

Percebe-se que seu diagrama de temporização é alterado de acordo com o Clock, existindo novas etapas de Pré-ajuste de S e Pré-ajuste de R quando o clock ainda não foi "ativado". Além disso esse dispositivo possui uma característica de memória pois a saída permanecem iguais mesmo que as entradas se modifiquem (manutenção nos pulsos do clock 1, 4 e 7)
![[Pasted image 20230228095527.png]]
![[Pasted image 20230228100737.png]]
