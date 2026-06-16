# Loader pour le chargement

Il est intéressant d'afficher un loader pour indiquer à l'utilisateur que la page est en train de charger.

Installons `react-loader-spinner` qui propose plusieurs formes de loader.

```bash
npm install react-loader-spinner --legacy-peer-deps
```

Ensuite :

```jsx
import { Circles } from 'react-loader-spinner';

<Circles
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
/>
```

Ajouter le spinner dans le `return()` :

```jsx
<div className="d-flex align-items-center justify-content-center p-2">
    <Circles visible={!isLoaded} />
</div>
```

Gérer un state `isLoaded` qui passera à `true` quand les données seront chargées.