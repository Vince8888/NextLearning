# Ajouter une tâche

Pour ajouter une tâche, nous avons besoin d'un input et, ici encore, une communication Enfant->Parent
L'utilisateur devra renseigner le titre de la tâche. A partir de là, l'objet task sera créé avec un id unique et le champ "completed" à false.

Créer le composant AddTask, il doit  :

- contenir un input pour saisir la tâche,
- renvoyer la saisie au parent (TaskList),
- Effacer le contenu de l'input.

Saisir le code de la fonction qui va permettre au composant TaskList de rajouter la tâche reçue à la liste des tâches.
Ajouter le composant AddTask et ses props dans le composant TaskList.

Le libellé du bouton « Ajouter » sera défini par une icone. Pour cela, dans AddTask, utiliser l'icône de la librairie react-icons :
`import { FaPlusSquare } from "react-icons/fa";`
Et dans le code : `<FaPlusSquare />`