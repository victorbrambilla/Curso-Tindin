# template-node-ts-mysql
Template usando Nodejs + express + typescript + mysql

<h4>Para iniciar digite no terminal</h4>
~~~Terminal
npm start
~~~
# db

Para usar o banco de dados do exemplo crie uma tabela seguindo o script abaixo:

```

CREATE TABLE notes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

```
```
CREATE TABLE users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
```
<hr>

<h1>Rotas</h1>
<hr>
<h3>Cadastro de usuários</h3>

login->POST
  Rota: /users
~~~Terminal
 { "email": "victor-brambilla@hotmail.com", "password": "123"}
~~~

login->GET
  Rota: /users

<h3>Cadastro de aulas</h3>
<hr>

Listar->GET
  Rota: /notes

Criar->POST
  Rota: /notes
~~~Terminal
 {"title":"Título" , "description": "descrição"}
~~~

Listar->PUT
  Rota: /notes
~~~Terminal
 {"id": 1, "title": "Título", "description": "descrição"}
~~~

Listar->DELETE
  Rota: /notes/id
