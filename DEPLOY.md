# Deploy — Portainer + Traefik

Stack pronto para subir a Bluhmwerk no seu Portainer, alinhado ao Traefik que
você já tem rodando (network `proxy`, cert resolver `zerossl`). TLS automático
via ZeroSSL/ACME e redirect 301 de `bluhmwerk.com` para `www.bluhmwerk.com`.

## Pré-requisitos na VPS

1. **Traefik** já rodando com:
   - Network externa `proxy` (atualmente em uso pelo seu Traefik)
   - Cert resolver `zerossl` (com EAB_KID e EAB_HMAC nas envs)
   - Entrypoints `web` (:80) e `websecure` (:443)
   - Redirect global `web → websecure` (você já tem)
2. **DNS**: registros `A` (ou `CNAME`) de `bluhmwerk.com` e `www.bluhmwerk.com`
   apontando para o IP da VPS.
3. **Portas** 80/443 liberadas no firewall.

## Subir pelo Portainer (recomendado)

1. **Stacks → Add stack**
2. **Build method**: `Repository`
3. Cole o repositório (HTTPS) e a branch — ex.: `claude/redesign-website-ux-NBcQG`
   ou `main` quando o merge for feito
4. **Compose path**: `docker-compose.yml`
5. **Deploy the stack**
6. O Portainer vai clonar o repositório, executar o build da imagem
   `bluhmwerk-web:latest` e subir o container ligado à network `traefik-public`.

Webhook opcional: ative a opção *Automatic updates → Webhook* se quiser que
um `git push` em produção dispare o redeploy.

## Subir via CLI (alternativa)

```bash
git clone <repo> bluhmwerk-web && cd bluhmwerk-web
docker compose build
docker compose up -d
```

## Como funciona o roteamento

- `:80` qualquer host → redirect global do Traefik para `:443` (já no entrypoint)
- `:443 bluhmwerk.com` → middleware `bluhmwerk-www` redireciona 301 para `https://www.bluhmwerk.com`
- `:443 www.bluhmwerk.com` → serve o Next.js standalone na porta interna 3000
- TLS provisionado via ZeroSSL/ACME para `bluhmwerk.com` + SAN `www.bluhmwerk.com`
- HSTS + headers de segurança aplicados via middleware `bluhmwerk-headers`

## Trocar para HTTP-only (sem Traefik)

Se você não tem Traefik e quer expor direto:

```bash
docker run -d --name bluhmwerk-web -p 3000:3000 --restart unless-stopped bluhmwerk-web:latest
```

Aí basta apontar um Nginx/Cloudflare/etc. para `http://<ip>:3000`.

## Variáveis de ambiente

O formulário de contato envia via [Resend](https://resend.com). No Portainer,
em **Stack → Environment variables**, adiciona:

| Chave | Valor | Obrigatório? |
|-------|-------|--------------|
| `RESEND_API_KEY` | API key do Resend (`re_...`) | sim, pra o form funcionar |
| `CONTACT_TO_EMAIL` | E-mail que recebe os briefings | opcional (default: `comercial@bluhmwerk.com`) |
| `CONTACT_FROM_EMAIL` | Remetente verificado no Resend | opcional (default: `Bluhmwerk Site <site@bluhmwerk.com>`) |

> Sem `RESEND_API_KEY` o formulário cai automaticamente no fallback `mailto:`
> — o usuário consegue enviar pelo cliente de e-mail dele.

Pra criar a chave: dashboard do Resend → API Keys → Create. Pra o `from`
funcionar, o domínio `bluhmwerk.com` precisa estar verificado no Resend
(adicionar registros DNS SPF/DKIM que eles fornecem).

## Logs e troubleshooting

```bash
docker logs -f bluhmwerk-web
docker compose ps
```

- **Erro `pull access denied for bluhmwerk-web`** ao atualizar no Portainer:
  você clicou em "Re-pull image and redeploy". Como a imagem é buildada
  localmente (não está em registry), o pull falha. Use **"Update the stack"**
  sem o re-pull. O `pull_policy: build` no compose já protege, mas a opção
  visual do Portainer pode ignorá-lo.
- Erro de network `proxy not found`: a rede do Traefik precisa existir
  (`docker network create proxy`) e o nome bater no compose.
- Site sobe mas não responde no domínio: confira labels do Traefik e DNS
  apontando para a VPS.
- Build falha: rode `docker compose build --no-cache` e leia o output do
  passo `npm run build`.

## Como atualizar o site sem dor

Cada `git push` na `main` quebra a imagem cacheada — você precisa rebuildar:

1. **Portainer** → Stacks → bluhmwerk-web
2. Clica em **"Pull and redeploy"** ❌ NÃO USE — vai dar pull error
3. Clica em **"Editor"** → não precisa mudar nada → **"Update the stack"**
   - Marca **"Re-build image"** se aparecer
   - **NÃO marca** "Re-pull image"
4. Aguarda ~2 min pro build

Alternativa: SSH na VPS, `cd` no path do stack, `docker compose up -d --build`.
