# Fullstack-blog-app-angular-nestjs

Este é um simples app de blog utilizando os frameworks NestJS e Angular 9

Foi implementado um CRUD completo e uma autenticação de login somente no lado front para demonstrar o processo. (A criação da autenticação no back-end e verificação de entrada de dados no front está como projeto futuro)

Foi seguido o tutorial do canal Codeforges TM
link: https://www.youtube.com/watch?v=nz6yFTyLbAQ&list=PLq1kZ5GbKd4qyDcK3IHGSi4FDAL6fRZeL

## Ferramentas utilizadas :wrench: 
- [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")
- [NodeJS: 12.18.3 LTS](https://nodejs.org/en/ "NodeJS:12.18.3 LTS")
- [Angular: 9.1.12](https://angular.io/ "Angular: 9.1.12")
- [PostgreSQL: 12.3](https://www.postgresql.org/ "PostgreSQL: 12.3")

## Executando a Aplicação Localmente :exclamation:
### Executando no lado Front-End
1. Dentro da pasta front, executar o comando:
> npm install

2. Depois executar o seguinte comando para executar a aplicação:
> ng serve

Depois basta abrir o browser em localhost:4200/login e entrar com qualquer dado para acessar a lista de postagens.

### Executando no lado Back-End
1. Dentro da pasta post-api, executar o comando:
> npm install

2. Depois executar o seguinte comando para executar a api:
> npm run start

Lembrando que para acessar a lista de postagens no lado front é necessário que a api esteja em execução e em sua máquina esteja instalado o banco de dados PostgreSQL e que também esteja online.
