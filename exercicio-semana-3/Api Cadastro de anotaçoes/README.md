# API To do list


API rodando em http://localhost:4000

<h4>Para iniciar digite no terminal</h4>
~~~Terminal
npm start
~~~
# db

<h1>Rotas</h1>
<hr>
<h3>Cadastro de usuários</h3>

login->POST
  Rota: /login
~~~Terminal
 { "email": "victor-brambilla@hotmail.com", "password": "123"}
~~~

Register->POST
  Rota: /users
  ~~~Terminal
 { "name":"victor", "email": "victor-brambilla@hotmail.com", "password": "123"}
~~~

<h3>Cadastro de anotações</h3>
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
  Rota: /notes
  ~~~Terminal
 {"id": 1}
~~~
