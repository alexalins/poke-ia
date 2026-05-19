# Builder stage: install all deps and build the app
FROM node:18-slim AS builder
WORKDIR /app

# Install dependencies for build (including dev deps)
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source and run build
COPY . .
RUN npm run build

# Production image: install only production deps
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy build artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies in the final image
RUN npm install --production --silent

EXPOSE 3000

CMD ["npm", "start"]
