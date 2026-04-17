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

##  Exemplos de rotas

###  Criar filme

POST /api/filmes

```json
{
  "titulo": "Homem de Ferro",
  "personagem_principal": "Tony Stark",
  "ano_lancamento": 2008,
  "fase": "Fase 1"
}
```

---

###  Listar filmes

GET /api/filmes

---

###  Buscar por ID

GET /api/filmes/1

---

###  Atualizar filme

PUT /api/filmes/1

```json
{
  "titulo": "Homem de Ferro Atualizado"
}
```

---

###  Deletar filme

DELETE /api/filmes/1

---

##  Filtros e paginação

Filtrar por fase:

```
GET /api/filmes?fase=Fase%201
```

Paginação:

```
GET /api/filmes?page=1&limit=5
```

Ordenação:

```
GET /api/filmes?ordenar=ano_lancamento
```

---

##  Banco de Dados

SQLite com mais de 20 filmes da Marvel.
