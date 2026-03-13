# AGENTS.md

## Regras do Projeto

- Idioma padrão: português (pt-BR).
- Após qualquer alteração de código, estilo, configuração ou assets, reiniciar o container Docker do projeto.
- Comando padrão de restart:
  - `docker compose restart`
- Após reiniciar, validar status:
  - `docker compose ps`
- Se o container não subir corretamente, executar sequência de recuperação:
  - `docker compose down`
  - `docker compose up -d`
  - `docker compose ps`
