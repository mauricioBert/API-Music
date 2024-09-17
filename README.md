# API-Music

API para gerenciar um catálogo completo de músicas, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) sobre músicas.

---

## Endpoints

### `GET /music`
Retorna a listagem de todas as músicas cadastradas no banco de dados.

**Parâmetros:** Nenhum.

**Respostas:**
- **200 OK:** 
 Se essa resposta for acessada, uma listagem de todas as músicas será apresentada.

  **Exemplo:**

  ```json
  {
    "music": [
      {
        "_id": "66e8799dba6fa95a2b2ac0ad",
        "title": "Heart-shaped box",
        "year": 2003,
        "album": "in utero",
        "artist": "Nirvana",
        "content": [
          {
            "length": "4:39",
            "lyrics": "She eyes me like a Pisces when I am weak,i've been locked inside your heart-shaped box for weeks. I've been drawn into your magnet tar pit trap, wish I could eat your cancer when you turn black! Hey, wait! I got a new complaint. Forever in debt to your priceless advice.  Hey, Wait! I got a new complaint. Forever in debt to your priceless advice... Your advice",
            "language": "English",
            "cover": "https://upload.wikimedia.org/wikipedia/pt/b/b4/InUtero.jpeg",
        ],
        "__v": 0
      },
      {
        "_id": "66e87e49ba6fa95a2b2ac0b0",
        "title": "Levitating",
        "year": 2020,
        "album": "Future Nostalgia",
        "artist": "Dua lipa",
        "content": [
          {
            "length": "3:23",
            "lyrics": "If you wanna run away with me, I know a galaxy and I can take you for a ride. I had a premonition that we fell into a rhythm Where the music don't stop for life. Glitter in the sky, glitter in my eyes, shining just the way I like! If you're feeling like you need a little bit of company, you met me at the perfect time. You want me, I want you, baby, My sugarboo, I'm levitating, the Milky Way, we're renegading, yeah, yeah, yeah, yeah, yeah.. I got you, moonlight, you're my starlight. I need you all night, come on, dance with me. I'm levitating!",
            "language": "English",
            "cover": "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
            "Style": "Pop",
            "_id": "66e87e49ba6fa95a2b2ac0b1"
          }],
        "__v": 0
      }
    ]
  }


- **500 Erro Interno do Servidor:** Caso essa resposta seja retornada, significa que ocorreu um erro interno no servidor. 

    **Exemplo:**
    ```json
    {
        "error": "Erro interno do servidor!"
    }
    ```
---

### `POST /music`
Cadastra uma nova música no banco de dados.

**Parâmetros:**
- `title`: Título da música
- `year`: Ano de lançamento da música
- `album`: Álbum ao qual a música pertence
- `artist`: Artista
- `content`: Conteúdo da música

    **Exemplo de requisição:**
    ```json
    {
            "title": "Heart-shaped box",
        "year": 2003,
        "album": "in utero",
        "artist": "Nirvana",
            "content": [
                {
                "length":"4:39",
        "lyrics": "She eyes me like a Pisces when I am weak, i've been locked inside your heart-shaped box for weeks.I've been drawn into your magnet tar pit trap,wish I could eat your cancer when you turn black!Hey, wait! I got a new complaint.Forever in debt to your priceless advice.Hey, Wait! I got a new complaint.Forever in debt to your priceless advice...Your advice",
        "language":"English",
        "cover":"https://upload.wikimedia.org/wikipedia/pt/b/b4/InUtero.jpeg",
        "Style":"Grunge Rock"
                }
            ]
    }
    ```

**Respostas:**
- **201 Criado:** Se essa resposta for acessada, a música foi cadastrada com sucesso.

    **Exemplo:**
    ```json
    {
        "Created"
    }
    ```

- **500 Erro Interno do Servidor:** Caso essa resposta seja retornada, significa que ocorreu um erro interno no servidor.

    **Exemplo:**
    ```json
    {
        "error": "Erro interno do servidor!"
    }
    ```
---

### `DELETE /music/:id`
Deleta uma música através do seu ID.

**Parâmetros:**
- `id`: ID da música a ser deletada.

**Respostas:**
- **204 Sem Conteúdo:** A música foi deletada com êxito e não há conteúdo a ser retornado.

- **400 Requisição Inválida:** O ID fornecido é nulo.   
**Exemplo:**
    ```json
    {
        Bad Request
    }
    ```
- **500 Erro Interno do Servidor:** Ocorreu um erro interno no servidor.

**Exemplo:**

    ```json
    {
        "error": "Erro interno do servidor!"
    }
    ```
---

### `PUT /music/:id`
Atualiza as informações de uma música a partir do ID fornecido.

**Parâmetros:**
- `id`: ID da música a ser atualizada
- `title`: Título da música
- `year`: Ano de lançamento da música
- `album`: Álbum ao qual a música pertence
- `artist`: Artista
- `content`: Conteúdo da música

**Exemplo de requisição:**

    ```json
    {
		"title": "Heart-shaped box instrumental remix",
    "year": 2013,
    "album": "Skrillex best of",
    "artist": "Nirvana & Skrillex",
	"content": [{
        "length":"3:27",
        "lyrics" : "no lyrics",
        "language":"English",
        "cover":"https://upload.wikimedia.org/wikipedia/pt/b/b4/InUtero.jpeg",
        "Style":"Electronic music"
			}
	]
}
    ```

**Respostas:**
- **200 OK:** Se essa resposta for exibida, as informações da música foram atualizadas conforme solicitado.
**Exemplo:**

    ```json
    {
	"music": {
		"_id": "66e8799dba6fa95a2b2ac0ad",
		"title": "Heart-shaped box instrumental remix",
		"year": 2013,
		"album": "Skrillex best of",
		"artist": "Nirvana & Skrillex",
		"content": [
			{
				"length": "3:27",
				"lyrics": "no lyrics",
				"language": "English",
				"cover": "https://upload.wikimedia.org/wikipedia/pt/b/b4/InUtero.jpeg",
				"Style": "Electronic music",
				"_id": "66e883bad34bfe4b9e8c6dd0"
			}
		],
		"__v": 0
	}} 
    ```
 
- **400 Requisição Inválida:** O ID fornecido não consta no banco, ou a requisição não foi formada corretamente.

**Exemplo:**
```json
    {
        Bad Request
    }
```

- **500 Erro Interno do Servidor:** Ocorreu um erro interno no servidor.

**Exemplo:**

 ```json
    {
        "error": "Erro interno do servidor!"
    }
```
---

### `GET /music/:id`
Retorna as informações de uma única música a partir do seu ID.

**Parâmetros:**
- `id`: ID da música a ser solicitada.

**Respostas:**
- **200 OK:** Informações da música buscada foram recuperadas.

**Exemplo:**

    ```json
    {
	"music": {
		"_id": "66e87e49ba6fa95a2b2ac0b0",
		"title": "Levitating",
		"year": 2020,
		"album": "Future Nostalgia",
		"artist": "Dua lipa",
		"content": [
			{
				"length": "3:23",
				"lyrics": "If you wanna run away with me, I know a galaxy and I can take you for a ride. I had a premonition that we fell into a rhythm Where the music don't stop for life. Glitter in the sky, glitter in my eyes, shining just the way I like! If you're feeling like you need a little bit of company, you met me at the perfect time. You want me, I want you, baby, My sugarboo, I'm levitating, the Milky Way, we're renegading, yeah, yeah, yeah, yeah, yeah.. I got you, moonlight, you're my starlight. I need you all night, come on, dance with me. I'm levitating!",
				"language": "English",
				"cover": "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
				"Style": "Pop",
				"_id": "66e87e49ba6fa95a2b2ac0b1"
			}
		],
		"__v": 0
	}}
    ```
- **400 Requisição Inválida:** O ID fornecido é inválido.

**Exemplo:**
```json
    {
        Bad Request
    }
```

- **404 Não Encontrado:** A música com o ID fornecido não foi encontrada nos registros.

**Exemplo:**
```json
    {
        Not found
    }
```
- **500 Erro Interno do Servidor:** Ocorreu um erro interno no servidor.

**Exemplo:**

 ```json
    {
        "error": "Erro interno do servidor!"
    }
```
