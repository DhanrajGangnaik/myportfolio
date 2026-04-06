# ---------- BASE ----------
FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable

# ---------- DEPENDENCIES ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# ---------- BUILD ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# ---------- PRODUCTION ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy only required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]