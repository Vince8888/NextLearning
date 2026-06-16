# Sauvegarde des données

L'initialisation de la liste des tâches doit être faite à partir du `localStorage` si elle existe, sinon, on ira la chercher sur l'API.

Nous allons sauvegarder la liste des tâches dans le `localStorage` à chaque modification.

Les tâches sont sauvegardées à chaque changement de `listTasks` grâce au fonctionnement de la dépendance du `useEffect`.

Le hook `useEffect` s'exécute :

- après chaque rendu du composant ;
- et seulement si une des dépendances du tableau `[]` a changé.

Ici, la dépendance est :

```javascript
[listTasks]
```

Donc :

À chaque fois que `listTasks` change, le code :

```javascript
localStorage.setItem(...)
```

est exécuté, ce qui met à jour les données dans le `localStorage`.