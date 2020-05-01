![enter image description here](https://github.com/fernadan/desafio-fundamentos-reactjs-semana3-bootcamp-rocketseat/blob/master/src/assets/logo-readme.png?raw=true)
# GoFinances - GoStack BootCamp

Oi! Você está agora no repositório da aplicação **GoFinances**. Basicamente o que fazemos aqui é tratar de transações financeiras pessoais. Se quiser controlar o que entra e sai da sua conta no banco, **esse aqui é o seu lugar**!


# Funcionalidades

Nesta versão temos 3 funcionalidades:

## Cadastro de transações
Nesta funcionalidade você poderá cadastrar as transações realizadas na sua conta bancária, sejam elas de entradas de grana ou saída.
> Torço para ser a primeira opção!

## Visualização do balanço
Para facilitar o acompanhamento das suas finanças, a aplicação te dará o consolidado entre entradas e saídas, especificando como está sua posição no momento que você visualizar a sua dashboard!
> Torço por sempre um total positivo!

## Importação de transações
Não da para cadastrarmos muitas transações do passado manualmente. Neste caso, a aplicação permite que você importe um arquivo CSV contendo quantas transações forem necessárias. Assim o processo fica mais rápido e simples!
> Acho que vale subir todo o histórico anterior para saber como está neste momento!

# Requerimentos
A aplicação faz a conexão com o banco de dados através de API NodeJS. A base para esta API se encontra no repositório do gitbub:

[API NodeJS para aplicação](https://github.com/fernadan/desafio-databaseuploadNodeJS-semana2-bootcamp-rocketseat)

Esta aplicação foi criada utilizando **ReactJS** e se baseia em testes automatizados realizados pelo **Jest**.

Caso não tenha o ambiente desenvolvimento do **ReactJS** instalado, sugiro acessar a playlist do **youtube**:

[Rocketseat - React](https://www.youtube.com/watch?v=7A4UQGrFU9Q&list=PL85ITvJ7FLoiuaKgHFYgrhZDwXOUEaxWI)

# Uso
Para utilizar esta aplicação é bem fácil. Segue os pontos abaixo e entenderá:

## Baixar o código
É possível obter o código da aplicação dando um **fork** para seu repositório do github, ou baixando a aplicação diretamente para sua máquina, sendo possível **baixar um pacote zipado** com todos os arquivos, ou dando um `git clone`.

## Rodar comando yarn
Após a aplicação ter sido baixada, através do **terminal**, execute o comando `yarn` na pasta onde estão os arquivos, para que sejam instaladas todas as dependências da aplicação.

## Executar a API Node
Para que a aplicação **GoFinances** funcione, é necessário que a api disponível para ele esteja sendo executada.

Após executar a API e constatar que a mesma está em execução, será necessária a configuração da URL da mesma na aplicação **GoFinances**.

O arquivo a ser configurado com a URL é o:
> src/services/api.ts

## Rodar teste automatizado
Para rodar os testes automatizados e checar se toda a aplicação está rodando corretamente, execute no terminal o comando `yarn test`.

Você receberá retorno se testes resolvidos(verde) ou com falhas(vermelho).

## Rodar aplicação
Para rodar a aplicação e visualizar a mesma no navegador, execute no terminal o comando `yarn start`.
