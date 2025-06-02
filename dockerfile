FROM node:21-alpine3.19 AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

FROM node:21-alpine3.19 AS builder

ARG DATABASE_URL

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy || echo "skip migrate if not needed"
RUN npm cache clean --force
RUN npm run build

FROM node:21-alpine3.19 AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

RUN npm prune --production

RUN mkdir -p .next/cache/images && chown -R node:node .next

ENV NODE_ENV=production

USER node

EXPOSE 3000

CMD ["npm", "start"]