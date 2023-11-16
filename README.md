# DesafioFluxStation
## Passo a passo para utilização

Passo 1: Clone o repositório

Passo 2: Em seu banco de dados crie uma database com o nome de sua preferência

Passo 3: Preencha as informações em cada arquivo .env presente nas pastas

Passo 4: Acesse a pasta "frontend" e dentro de 'src/app/lib/constants.ts' altere as variáveis com a url do backend e frontend, respectivamente

Passo 5: Acesse a pasta "db-migrations-nest" e na linha de comando utilize "npm install" e em seguido "npm run typeorm:run-migrations"

Passo 6: Acesse as pastas "backend" e "frontend" e rode "npm install"

Passo 7: Acesse a pasta "backend" e utilize o comando "npm run start:dev"

Passo 8: Acesse a pasta "frontend" e utilize o comando "npm run dev"

Passo 9: Acesse a url do seu frontend e se divirta!

## Sobre o processo
Para chegar ao resultado desse desafio levei em conta alguns pontos, que considerei essenciais, citados no enunciado, entre eles está o fato de ser, a princípio, uma plataforma voltada para o motorista. Desse forma, minha decisão foi implementar uma plataforma visualmente simples e intuitiva para o registro e a visualização dos abastecimentos. 
Além disso, realizei a implementação e fiz a modelagem do banco de dados levando em conta a possibilidade de expansão do negócio de 1 para diversos postos de combustíveis.
