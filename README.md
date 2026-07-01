Cette application est développée avec NextJS depuis une ([template](https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter)).

Le but est de faire une appli web simple avec un portfolio de mes projets (pour le peu qu'il y a dont je suis assez fier pour les montrer) ainsi qu'un rapide CV avec les informations sur mon parcours et sur les stacks techniques que je maîtrise.

Comment lancer le projet ? => Tout d'abord cloner ou fork le projet depuis Git.
Une fois dans le dossier correspondant au projet, taper la commande `npm install`.
Puis tapez `npm run dev` afin de lancer ce projet en local.

C'est un projet réalisé en cours qui a pour objectif principal de (re)découvrir NextJS et ses possibilités.

## Concernant l'IA

Avant d'utiliser Copilot, j'ai fait un tour complet du dossier app/ histoire de comprendre ce qui a été fait dans la template. Les classes de style pour les animations sur les pages et comment le routing marchait etc.

Une fois que c'était fait, je me suis chargé tout seul de remplacer tout ce qui concernait l'ancien propriétaire avec un rapide ctrl+f de "Chronark" et de tous ses projets. J'ai repris la formule des cards de projects et j'ai mis les miens dedans en ajoutant des images et des urls. J'ai utilisé Copilot pour m'aider à rajouter correctement les images et les liens vers les sites.

Ensuite j'ai rajouté la page pour faire le CV, où j'ai demandé à Copilot de me faire une grille chronologique que j'ai du modifier un peu pour la rendre plus jolie à la main.

Il reste ensuite la page de contact que j'ai rapidement fait avec l'IA pour remplir le quota.

J'ai décidé de mettre les messages dans un json histoire de simplifier le processus.

Donc de manière générale l'IA m'a juste aidé à implémenter mes idées dans le contexte de la template et j'ai ensuite "arrondi les bords" pour rendre ça un peu plus à l'image que je voulais.

J'ai choisi la template, j'ai rempli les projets (l'IA a juste ajouté les images et les liens que je lui donné) en me basant sur la template, et j'ai pris l'idée basique du CV avec la frise, où j'ai moi-même ajouté mes infos.

Du moment que j'ai compris la structure écrite à l'avance par le créateur de la template, c'était assez facile de réutiliser ses composants pour mon propre usage.