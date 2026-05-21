# 📊 Analisador de Números

Um projeto interativo desenvolvido em JavaScript puro que simula um analisador de dados matemáticos básico. O sistema recebe números entre 1 e 100 informados pelo usuário, armazena-os em um vetor (array) e, ao finalizar, exibe estatísticas em tempo real sobre os valores informados.

## 🚀 Funcionalidades

- **Validação de Entrada:** O sistema impede a adição de valores vazios ou de números fora do intervalo estipulado (menores que 1 ou maiores que 100).
- **Lista Dinâmica:** Cada número válido adicionado é listado visualmente dentro de uma caixa de seleção (`<select>`).
- **Foco Automático:** Limpeza do campo de texto e retorno do cursor automático após cada inserção, otimizando a experiência do usuário.
- **Análise Estatística Avançada:** Ao clicar em finalizar, o script varre o vetor dinamicamente usando laços de repetição (`for`) para calcular e exibir:
  - Quantidade total de números cadastrados.
  - O maior valor informado.
  - O menor valor informado.
  - A soma acumulada de todos os elementos.
  - A média aritmética dos valores cadastrados.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação dos elementos da página.
- **CSS3:** Estilização visual e interface responsiva com paleta de cores moderna.
- **JavaScript (ES6):** Manipulação de DOM, arrow functions, tratamento de eventos de clique, estruturas condicionais (`if/else`), laços de repetição (`for`) e lógica de vetores (arrays).

## 🎮 Como Executar o Projeto

1. Faça o clone deste repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador web de sua preferência.
3. Digite valores entre 1 e 100, clique em **Adicionar** e, ao terminar, clique em **Finalizar** para ver as estatísticas.

---
Desenvolvido como parte dos meus estudos práticos de lógica de programação em JavaScript. 💻🔥