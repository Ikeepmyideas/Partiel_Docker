# Projet : Conteneurisation des services du Projet Annuel 🛠️📊

## 1. Création du Diagramme d'Architecture

Notre projet annuel vise à informatiser une association solidaire dédiée à la coordination des actions caritatives en faveur des bénéficiaires, avec le soutien des bénévoles et des administrateurs. Pour cela, nous avons élaboré un diagramme d'architecture afin de visualiser la mise en place des différents services nécessaires. Ces services se déclinent en trois principaux volets : le backend, le frontend et la base de données.

### Diagramme d'Architecture :
- **Backend** 🖥️: Service responsable du traitement des requêtes serveur. Il utilise Node.js et Express comme technologies principales.
- **Frontend** 🌐: Interface utilisateur de l'application, développée avec React pour une expérience utilisateur interactive et réactive.
- **Base de données** 💾: Stockage persistant des données. Nous avons opté pour PostgreSQL en raison de sa robustesse et de sa fiabilité.

## 2. Détail des Services

Chaque service joue un rôle crucial dans notre application. Voici une brève description de chacun :

- **Backend** 🖥️:
  - Responsable de la logique métier de l'application.
  - Gère les requêtes HTTP et les interactions avec la base de données.
  - Utilise Node.js et Express pour créer une API RESTful.

- **Frontend** 🌐:
  - Interface utilisateur de l'application, fournissant une expérience conviviale aux utilisateurs.
  - Développé avec React pour sa flexibilité et sa richesse en fonctionnalités.

- **Base de données** 💾:
  - Stocke de manière persistante les données de l'application.
  - Utilise PostgreSQL pour assurer la cohérence et la sécurité des données.

## 3. Explication

Construction des Images Docker

Pour mettre en place la construction des images Docker dans le cadre de notre projet. Voici comment nous l'avons fait :

1. Définition des Dockerfiles :
   - Nous avons créé des fichiers Dockerfile pour chaque composant de notre application, spécifiant les environnements et les dépendances nécessaires.

2. Implémentation de Builds Multi-étapes :
   - Nous avons utilisé des builds multi-étapes dans nos Dockerfiles pour différencier les environnements de développement et de production. Cela garantit que nos images de production ne contiennent que ce qui est nécessaire à l'exécution de l'application.

3. Test et Validation Locaux :
   - Après avoir construit nos images, nous les avons testées et validées localement pour nous assurer qu'elles fonctionnent correctement.

4. Choix du Registre d'Images :
   - Nous avons choisi le registre d'images Docker Github Container Registry pour stocker nos images. Cela facilite le partage et le déploiement de nos images.

5. Configuration des Identifiants de Registre :
   - Nous avons configuré les identifiants de registre Docker localement pour sécuriser la communication avec notre registre.

6. Tag et Poussée des Images :
   - Nous avons tagué nos images Docker avec le nom du registre, le nom du dépôt et un nom. Ensuite, nous les avons poussées vers le registre à l'aide de la commande `docker push` et le nom.

7. Récupération des Images dans Docker Compose :
   - Enfin, nous avons assuré la récupération correcte des images à partir du registre dans nos fichiers Docker Compose pour garantir un déploiement cohérent et fiable de notre application avec la commande `docker pull`.


