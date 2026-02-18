# Landing Page Node.js com Next.js + Docker

Projeto puro em Next.js para simular deploy em hospedagem gerenciada (estilo Hostinger).

## Rodar com Docker (Hot Reload)

```powershell
docker compose up -d --build
```

Acesse em:

`http://localhost:8080`

## Parar

```powershell
docker compose down
```

## Como funciona no desenvolvimento

- O container roda `next dev`.
- O projeto local eh montado em volume (`./:/app`).
- Alteracoes em `app/`, `public/` e demais arquivos refletem sem rebuild/recreate do container.

## Editar conteudo

- Pagina principal: `app/page.tsx`
- Estilos: `app/globals.css`
- Porta externa: `.env` (`APP_PORT`)

