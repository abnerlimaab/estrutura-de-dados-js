# Estruturas de dados

Algorítimos de criação e manipulação de estruturas complexas em uma abordagem funcional.

<details><summary>Pilha</summary>

"Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (Last In First Out, isto é, o último a entrar é o primeiro a sair). O final da lista é conhecido como topo enquanto o lado oposto é conhecido como base. Os elementos mais novos ficam próximos ao topo enquanto os elementos mais antigos estão próximos da base."

GRONER, Loiane. **Estruturas de dados e algoritmos com javascript 2ª edição**. São Paulo: Novatec Editora, 2022.

### Funções comuns em uma pilha de dados:

### push

Insere um novo elemento no topo da pilha.

```typescript
push: (value: T | T[]) => Stack<T>;
```

### pop

Remove o elemento do topo da pilha.

```typescript
pop: () => Stack<T>;
```

### peek

Retorna o elemento no topo da pilha.

```typescript
peek: () => T;
```

### isEmpty

Verifica se a pilha está vazia.

```typescript
isEmpty: () => boolean;
```

### clear

Remove todos os elementos da pilha.

```typescript
clear: () => Stack<T>;
```

### size

Retorna o tamanho da pilha (quantidade de items).

```typescript
getAll: () => T[];
```

</details>

<details><summary>Fila</summary>

"Uma fila é uma coleção ordenada de itens baseada em FIFO (First In First Out, isto é, o primeiro que entra é o primeiro que sai), também conhecido como princípio do first-come first-served (o primeiro a chegar é o primeiro a ser servido). A adição de novos elementos na fila é feita na cauda (tail) e a remoção na frente. O elemento mais recente na fila deve esperar no final dela."

GRONER, Loiane. **Estruturas de dados e algoritmos com javascript 2ª edição**. São Paulo: Novatec Editora, 2022.

### enqueue

Método responsável pela adição de novos elementos na fila adicionando-os sempre ao final.

```typescript
enqueue: (value: T | T[]) => Queue<T>;
```

### dequeue

Método responsável pela remoção de itens da fila. O primeiro item adicionado na fila será o item removido. Seguindo o paradigma funcional, retornaremos um array com uma nova fila no primeiro elemento e o item removido no segundo.

```typescript
dequeue: () => [Queue<T>, T];
```

### peek

Método responsável por retornar o primeiro elemento da fila sem alterá-la.

```typescript
peek: () => T;
```

### getAll

Método responsável por retornar todos os elementos da fila em um Array sem alterá-la.

```typescript
getAll: () => T[];
```

### size

Método responsável por retornar o tamanho da fila.

```typescript
size: () => number;
```

### isEmpty

Método responsável por informar se a fila está vazia através de um valor boleano.

```typescript
isEmpty: () => boolean;
```

### clear

Método responsável por limpar a fila.

```typescript
clear: () => Queue<T>;
```

### toString

Método responsável por retornar uma representação em string da fila.

```typescript
toString: () => string;
```

</details>