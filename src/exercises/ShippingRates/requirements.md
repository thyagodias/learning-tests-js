# Exercício 4 - Cálculo de Frete

Em todos os e-commerces, o usuário pode criar um carrinho de compras, adicionar um produto
e calcular o valor do frete para a entrega.
O valor do frete é calculado a partir do CEP do usuario (destinatário), e geralmente é provido
pelos serviços de fretamento (correios ou particular), muitas vezes sendo invocado uma API
que, dado o CEP (dentre outros dados), traz o valor do frete.

### Desenvolva um sistema simplificado do carrinho, com os seguintes requisitos:
- Um produto possui um nome e um valor
- Um carrinho recebe um conjunto de produtos e a quantidade de itens de cada produto
- Um carrinho pertence à um usuário, que tem nome e seu endereço de entrega representado por um CEP
- Um serviço que recebe o carrinho, e retorna o valor final para o usuário

### Esse serviço:
- Faz a soma total de valores de todos os produtos do carrinho
- Caso o valor seja < $100,00, o sistema requisita para um serviço externo o valor do frete de acordo com o CEP do dono do carrinho
- Retorna o valor final do carrinho (com ou sem frete)

## Sugestão de solução:
### 1. Crie a estrutura necessária para o Carrinho
- a. Usuario (nome e CEP)
- b. Produto (nome e Valor)
- c. Carrinho (Usuario)

### 2. Faça o carrinho responder o valor total das compras - com testes
- a. Pergunte-se:
  - i. Qual o valor se ele estiver vazio?
  - ii. E se eu adicionar novos produtos?
  - iii. E se eu adicionar produtos que já tinham sido adicionados?
  - iv. E como eu removo o produto do carrinho?
  - v. E se eu adicionar dois produtos ao mesmo tempo?
  - vi. E se eu adicionar ou remover a quantidade de produtos no carrinho?
  - vii. E se eu zerar a quantidade de produtos do carrinho?

- b. Não há requisitos formais de como um carrinho deve funcionar, ou suas
interfaces

c. O carrinho ​ deve​ ter um método final, que retorne o valor total do carrinho

### 3. Criem uma interface que representará o Serviço do Correios
- a. Ele terá apenas um método registrado - recebe o CEP e retorna um valor de
Frete
- b. Não precisamos da implementação real (no momento, e para esse exercício)

### 4. Crie um classe que representará o serviço de cálculoa. 
- a. Ela receberá em sua construção uma instância da interface do serviço de Correios (injeção de dependência)
- b. Ela terá um método que recebe um carrinho como parâmetro, e retorna o valor
total

### 5. Crie os testes antes da implementação
- a. Qual o valor total, caso a soma total dos produtos do carrinho (feito
anteriormente e com seus testes já funcionando) seja< $100?
  - i. Eu preciso invocar o método real do Carrinho?
  - ii. Como eu simulo o retorno do serviço do Correios?
  - iii. Como eu garanto que a lógica decisória está correta?
  - iv. Como eu garanto que eu chamei apenas uma única vez o serviço do
correio?

- b. E se o valor for >= $100?
  - i. Qual será o valor final do cálculo?
  - ii. Como eu garanto que eu não precisei chamar os serviços do correio?

### 6. Crie os testes usando Mocks, mockando tanto o Carrinho quanto o Serviço de Correios
- a. A implementação do serviço que calcula valor total com ou sem frete deve ser
concreta

## Definition of Done
Todos os requisitos devem estar cobertos por testes automatizados. Deve existir pelo menos uma classe de testes para o serviço, e esse deverá cobrir todas as variações das regras do serviço. Além do mais, a comunicação com o serviço do correio deverá ser através de mocks.