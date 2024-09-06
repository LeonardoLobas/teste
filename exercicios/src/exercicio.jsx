// Exercício 1: Frequência de Elementos em uma Lista
// Escreva uma função contar_frequencia(lista) que recebe uma lista de elementos e retorna um dicionário com a frequência de cada elemento na lista.
// Exemplo:
// entrada = [1, 2, 2, 3, 4, 4, 4, 5]
// saída = {1: 1, 2: 2, 3: 1, 4: 3, 5: 1}

// Exercício 2: Interseção de Duas Listas
// Descrição: Crie uma função intersecao_listas(lista1, lista2) que retorna uma nova lista contendo apenas os elementos que são comuns às duas listas, sem duplicatas.
// lista1 = [1, 2, 2, 3, 4]
// lista2 = [2, 3, 4, 4, 5]
// saída = [2, 3, 4]

const Exercicio = () => {
    const entrada = [1, 2, 2, 2, 5, 6, 7, 8, 8];
    const entrada2 = [1, 2, 3, 4, 5, 5];
    const count = {};
    for (let value of entrada) {
        count[value] = (count[value] || 0) + 1;
    }
    console.log(count);

    const count2 = {};
    for (let value of entrada2) {
        count2[value] = (count2[value] || 0) + 1;
    }
    console.log(count2);

    const repetidos = [];
    for (let key in count) {
        if (count2[key]) {
            repetidos.push(key);
        }
    }
    console.log(repetidos);
};

export default Exercicio;
