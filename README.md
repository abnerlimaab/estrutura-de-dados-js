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
