// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 20, en sautant les nombres qui sont multiples de 3.

for (let i = 1; i <= 20; i++) {
  if (i%3 == 0){
    continue;
  }
  console.log(i);
};

// Écrivez un programme qui utilise une boucle do...while pour demander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre pair.
let pair = prompt("Entrez un nombre");
do {
  console.log(pair);
  pair++;
} while (pair%2 == 0)


let nbrPair;
do {
    nbrPair = prompt("Entrez un nombre(pair)");
} while (nbrPair%2 != 0);

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant l'instruction break pour sortir de la boucle lorsque le nombre atteint 7.

for (let i = 0; i <= 10; i++) {
  if(i == 7){
      break;
  }
  console.log(i)
};

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant l'instruction continue pour passer à l'itération suivante lorsque le nombre est impair.

for (let i = 0; i <= 10; i++) {
  if (i == 0){
    console.log(i+` is pair`);
  }
  if (i%2 == 0) {
    console.log(i+` is pair`)
  }
  else
  console.log(i+` is impair`)
}

/* TEST
for (let i = 0; i <= 10; i++) {
  if (i%3 == 0){
      continue;
  }
  console.log(i);
};
*/

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant l'instruction break pour sortir de la boucle lorsque le nombre atteint 5, puis affiche un message indiquant que la boucle a été interrompue.

for (let i = 0; i <= 10; i++) {
  console.log(i)
  if(i == 5){
    alert(`la boucle a été interrompue`);
    break;
  }
  console.log(i);
}

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant l'instruction continue pour passer à l'itération suivante lorsque le nombre est divisible par 3, puis affiche un message indiquant que l'itération a été sautée.

for (let i = 1; i <= 10; i++) {
  if(i%3 == 0){
      console.log("l'itération a été sautée");
      continue;
  }
  console.log(i);
}

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant une condition d'arrêt pour sortir de la boucle lorsque le nombre atteint 5, puis affiche un message indiquant que la boucle a été interrompue.

for (let i = 0; i <= 10; i++) {
  console.log(i)
  if(i == 5){
    break;
    console.log(i)
  }
}
alert(`la boucle a été interrompue`);

// Écrivez un programme qui utilise une boucle for pour afficher les nombres de 1 à 10 en utilisant une condition d'arrêt pour passer à l'itération suivante lorsque le nombre est divisible par 3, puis affiche un message indiquant que l'itération a été sautée.

for (let i = 1; i <= 10; i++) {
  if(i%3 == 0){
      alert(`la boucle a été interrompue`);
      continue;
  }
  console.log(i);
}
