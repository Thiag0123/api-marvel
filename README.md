#  API REST - Filmes Marvel

##  Descrição

API REST desenvolvida em Node.js com SQLite para gerenciamento de filmes da Marvel.

---

##  Tecnologias

* Node.js
* Express
* SQLite
* Knex

---

##  Instalação

```bash
git clone <seu-repo>
cd api-marvel
npm install
npm run dev
```

---

##  Rotas

###  Criar filme

POST /api/filmes

###  Listar filmes

GET /api/filmes

###  Buscar por ID

GET /api/filmes/:id

###  Atualizar

PUT /api/filmes/:id

###  Deletar

DELETE /api/filmes/:id

---

##  Filtros

* ?fase=Fase 1
* ?page=1&limit=5
* ?ordenar=ano_lancamento

---

##  Banco de Dados

SQLite com mais de 20 filmes da Marvel.