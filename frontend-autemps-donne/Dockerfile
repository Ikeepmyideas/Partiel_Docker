# Utiliser une image Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers du package.json et du package-lock.json
COPY package.json ./

# Installer les dépendances
RUN npm i

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour démarrer votre application Node.js
CMD ["npm", "start"]
