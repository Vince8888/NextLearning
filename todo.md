# Valider une tâche

Comme nous l'avons vu dans la ressource précédente, il va falloir ici communiquer entre l'enfant (TaskItem) et le parent (TaskList) pour mettre à jour la liste des tâches et donner la possibilité de valider ou non une tâche.

Autre chose, la liste des tâches va maintenant être variable (tâche complétée ou non). Un tableau simple ne suffit plus, il va falloir utiliser un state pour mettre à jour l'affichage de la page à chaque modification.

Dernier point, pour utiliser les state ici, il va falloir dire que le composant fonctionne côté client et non côté serveur (c'est le fonctionnement par défaut), avec l'instruction :

"use client" en début de fichier.

Maintenant, les tâches ne sont plus qu'un champ texte mais un objet contenant :

- l'ID
- la tâche
- le champ "completed"

## Dans le composant TaskItem

- Faire les modifications nécessaires pour gérer l'objet Task et non plus la chaine de caractère,
- Modifier le bouton pour gérer le clic sur la validation de la tâche. Nous utiliserons les boutons `Bootstrap` suivant : class = "btn btn-sm ml-auto btn-success"  et "btn btn-sm ml-auto btn-outline-success" suivant que la tâche est validée ou pas,
- Renvoyer l'information au parent (TaskList) afin de mettre à jour la liste .

## Dans le composant TaskList

- Créer le state qui va être initialisé par initialData.js  
- Créer la fonction qui va mettre à jour le champ "completed" lié à la tâche  
- Parcourir la liste des tâches avec un map afin d'appeler TaskItem pour chaque tâche  