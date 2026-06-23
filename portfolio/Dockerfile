# Etapa 1: build de la app con Vite
FROM node:22-alpine AS build

WORKDIR /app

# Instalar dependencias (se cachea mientras no cambien los lockfiles)
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el resto del código y compilar
COPY . .
RUN npm run build

# Etapa 2: servir los archivos estáticos con nginx
FROM nginx:alpine AS production

# Configuración de nginx con fallback para el router de React
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el resultado del build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
