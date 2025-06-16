# TP DevOps - J5 : Mise en place de tests Postman sur une API NodeJS

## 🎯 Objectif du TP

Développer une **API REST en NodeJS** avec des routes spécifiques, et y appliquer des **tests automatisés Postman**, intégrés ensuite dans un pipeline CI/CD via **GitLab-CI**.

---

## 📦 Fonctionnalités attendues de l'API

| Route           | Méthode | Code attendu | Description                                               |
|----------------|---------|--------------|-----------------------------------------------------------|
| `/status`      | GET     | 200          | Retourne un code 200 (OK) sans contenu                    |
| `/city`        | GET     | 200          | Retourne un tableau JSON de villes                        |
| Autres routes  | *       | 404          | Toute autre route ou méthode doit renvoyer une erreur 404 |

Exemple de réponse de `/city` :

```json
["Paris", "Bordeaux", "Lyon", "Strasbourg", "Toulouse", "Marseille"]
```

---

## 🛠️ Installation

### 1. Initialiser le projet Node.js

```bash
mkdir tp-nodejs && cd tp-nodejs
npm init -y
```

### 2. Installer les dépendances

```bash
npm install express body-parser
```

### 3. Structure du projet

```
tp-nodejs/
├── node_modules/
├── src/
│   └── app.js
├── tests/
│   └── TP.postman_collection.json
├── package.json
```

---

## 🚀 Lancer l'application

```bash
node src/app.js
```

L'API sera disponible sur [http://localhost:3000](http://localhost:3000)

---

## 🧪 Exécuter les tests Postman

### ✅ Prérequis

Installez **Newman** (runner en ligne de commande de Postman) :

```bash
npm install -g newman
```

### 🔁 Exécution de la collection

```bash
newman run ./tests/TP.postman_collection.json --env-var "URL_APP=http://localhost:3000"
```

---

## 🛠 Exemple de script `.gitlab-ci.yml`

```yaml
stages:
  - test

test_api:
  image: node:18
  stage: test
  script:
    - npm install
    - node src/app.js &
    - sleep 2
    - npm install -g newman
    - newman run ./tests/TP.postman_collection.json --env-var "URL_APP=http://localhost:3000"
```

---

## 📁 Ressources

- [Express.js](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Newman](https://www.npmjs.com/package/newman)
