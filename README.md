# Para executar a aplicação após o clone do repositório
## npm install ou npm i
## npm start
# Teste para Engenheiro de Software - Gustavo Maciel Real de Lima

O teste consiste em utilizar React para uma simples aplicação que exibe o valor de ações através de chamadas de API. Crie uma tela apenas com um input de texto que receberá um símbolo de ação (ex: aapl para Apple, fb para Facebook, twtr para Twitter) e retornará o último valor de ação da empresa, assim como outras informações relevantes. Sinta-se livre para utilizar quaisquer dependências que você desejar no npm e auxiliar no desenvolvimento da aplicação.

* Utilizar componentes React para montar a interface e Redux para controlar o estado

    - O mesmo foi utilizado como o solicitado o Redux controla o estado dos DADOS da ação filtrada.

* Você pode utilizar a API gratuita do [IEX](https://iextrading.com/developer/) para obter os dados necessários

    - Foi utilizado durante o desenvolvimento as requisições HTTP e WebSocket, o ultimo para o cumprimento de um dos desafios. Foi estudado a documentação da API e estou ciente da quantidade de informações que a mesma proporciona.

* A documentação da API sugerida pode ser acessada [aqui](https://iextrading.com/developer/docs/#stocks)

    - O Stocks foi utilizado para obter os dados da Empresa, Grafico e os dados da Ação da Empresa.

* As informações de ações para cada símbolo são encontradas [aqui](https://iextrading.com/developer/docs/#quote) (Estamos interessados apenas no `latestPrice`)

    - Conforme mencionado a API foi estudada e estou ciente da quantidade de informações que a mesma oferece, com o intuito de querer enriquecer o teste foi adicionado mais algumas informções, como a mudança na ação em valor e em porcentagem.

* A mesma API também retorna [as informações mais relevantes da empresa](https://iextrading.com/developer/docs/#company)

    - Para esse tópico foi utilizado o nome da empresa, a bolsa de valores que ela se encontra, simbolo, site e descrição.

* Plotar um gráfico com [a evolução do valor das ações](https://iextrading.com/developer/docs/#chart) (PS: utilizamos o pacote [Recharts](http://recharts.org))

    - Conforme solicitado foi implementado o gráfico sugerido.


## Desafios extras

Se você gostaria de fazer um pouco mais, sugerimos os seguintes desafios:

* Componentes reutilizáveis: que tal montar a interface usando seus próprios componentes de apresentação? Uma ideia: criar componentes genéricos de UI que poderiam ser utilizados em outros projetos. É o que fazemos internamente com nossos projetos! Adoramos o [`styled-components`](https://styled-components.com)

    - Conforme solicitado o styled-components foi implementado, um dos componentes reutilizaveis por exemplo é o de busca.

* Atualizações: a API é atualizada quase em tempo real e poderia atualizar as informações de acordo (conforme faz o [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch))

    - Para a atualização foi necessário implementar o WebSocket, a API oferece uma gama menor de service via WebSocket, para contornar esse problema foi necessário fazer a chamada das requisições HTTP quando o socket recebe um broadcast.

* Animação à la [Bloomberg](https://www.bloomberg.com): exibir em formato de marquee o valor e variação percentual do valor das ações

    - Foi feito a animação somente com os dados da empresa atual afim de exemplificar a implementação da animação e mostra capacidade em construir a mesma. Foi utilizado CSS para a mesma.