# Imagen base de Node.js (versión Alpine - más pequeña)
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json primero (para cache de Docker)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar
CMD ["node", "app.js"]