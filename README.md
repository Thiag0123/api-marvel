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

### 1. Clonar o repositório

```bash
git clone https://github.com/Thiag0123/api-marvel.git
cd api-marvel
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o servidor

```bash
npm run dev
```

### 4. Acessar API

```
http://localhost:3000
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
