# Usar la imagen base de Node.js con la versión específica
FROM node:16.15.1

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias al contenedor
COPY package*.json ./

# Instalar Angular CLI globalmente (opcional) y las dependencias del proyecto
RUN npm install -g @angular/cli@14.2.13 \
    && npm install

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que correrá la aplicación Angular (habitualmente 4200)
EXPOSE 4200

# Comando para iniciar la aplicación Angular en modo desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0"]
