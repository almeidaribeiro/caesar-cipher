# Cifra de César

## Prefácio

Um grupo de amigos fãs de RPG (role-playing game), um tipo de jogo aonde os jogadores assumem papéis dos personagens dentro de um mundo de fantasia, decidem criar o próprio jogo aonde desejam se comunicar com mensagens secretas entre eles para que um time não possa tomar conhecimento da estratégia do outro. Sendo assim tendo a necessidade de um lugar onde pudessem criptografarem suas mensagens e descriptografarem as que lhe forem enviadas, com o objetivo de vencerem o jogo. 

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

Projeto proposto para as alunas do bootcamp Laboratória da turma do primeiro semestre de 2019.
O objetivo deste projeto foi de criar um programa que seria capaz de criptografar e descriptografar uma mensagem dado um número de deslocamento. Este programa foi desenvolvido pensando no usuário, usando conhecimentos de JavaScript e UX (user experience).

## Definição de usuário

O usúario é um jogador de RPG que deseja criptografar e descriptografar mensagens de maneira fácil e rápida.

## Fluoxograma de Blocos


===========================================

## Processo de desenvolvimento

No processo de desenvolvimento a primeira etapa foi criar um fluoxograma de blocos pensando em como seria o fluxo do usuário e do sistema. Após isso, escrevemos um arquivo HTML onde foi pensado 




Foi criado primeiramente um diagrama de blocos para entender o fluxo do sistema, e a estrutura de pastas e arquivos (mostrado abaixo). No arquivo HTML foi adicionado elementos para receber os dados digitados pelo usuário, e no arquivo JavaScript os dados foram captados e manipulados para realizar a criptografia e descriptografia da mensagem. Uma vez concluído, o HTML foi incrementado, assim como o CSS, usando como tema uma história que justificasse a necessidades do usuário em criptografar uma mensagem.
Um arquivo de testes foi criado no final do processo,seguindo as orientações dos mentores. O intuito foi usar dados que poderiam ser considerados criticos e encontrar possíveis erros, tais como valores nulos, números negativo, números com casas decimais muito grande entre outros. Com o código devidamente testado foi analisado a necessidade de melhorias, como a remoção de estruturas repetidas e a organização das funções para que pudesse ser lido de forma clara.

## Considerações gerais

A lógica do projeto deve estar implementada inteiramente em JavaScript(ES6).
Nesse projeto NÃO está permitido usar bibliotecas ou frameworks, só
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Para começar este projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependência:

```text
./
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   └── style.css
```

## Parte obrigatória

### Definição do produto

No `README.md` descreva o seu processo de desenvolvimento utilizando os
diagramas de bloco e como definiu os usuários quando estava desenvolvendo
seu projeto.

### UI

A interface deve permitir ao usuário:

* eleger um `offset` indicando quantas posições de deslocamento de caracteres
  queremos que a cifra utilize
* inserir uma mensagem (letras maiúsculas e minúsculas) que queremos cifrar
* ver o resultado da mensagem cifrada
* inserir uma mensagem (letras maiúsculas e minúsculas) para ser decifrada
* ver o resultado da mensagem decifrada

### Scripts / Arquivos

* `src/index.html`: este é o ponto de entrada da sua aplicação. Este arquivo
  deve conter o _markup_ (HTML) e incluir o CSS e JavaScript necessário.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve
  estar _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve
  conter dois métodos:
    - `cipher.encode(offset, string)`: `offset` é o número de posições que
    queremos mover para a direita no alfabeto e `string` a mensagem (texto)
    que quemos cifrar.
    - `cipher.decode(offset, string)`: `offset` é o número de posições que
    queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
    que queremos decifrar.
* `src/tests.js`: este arquivo deve conter os testes que você irá implementar

## Hacker edition


### Parte Opcional: "Hacker edition"

A descrição geral deste projeto não menciona o que aconteceria com as outros
caracteres (como espaços, pontuação, acentos, etc.). Também não foi mencionado
o que aconteceria se o `offset` fosse negativo. Como parte do hacker edition te
convidamos a explorar este caso por conta própria.

O desafio anterior nos ajuda a observar sua capacidade de autoaprendizagem,
podemos agregar aos seu trabalho um elemento que te leva à um novo nível.

O mesmo em habilidades socioemocionais. Você pode realizar um planejamento
tendo em consideração a utilização de ferramentas de planejamento como um
calendário, trello, flip chart entre outros, criando um plano passo a passo de
como quer enfrentar o seu desafio ou problema. Realizando uma estimação
realista do tempo.

## Entrega

Para entregar o projeto, você deve subir seu código para o GitHub
(`add`/`commit`/`push`)..

## Avaliação

Aconselhamos você a revisar [a rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver a descrição detalhada de cada _habilidade_ e cada _nível_.

***




### Parte Obrigatória

* [ ] `README.md` com explicações e desenho do projeto
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [ ] Permite usar um `offset` (_deslocamento_) negativo
* [ ] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)
