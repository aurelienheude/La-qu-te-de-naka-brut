import { heroGoldAmounts, addToHeroGold } from "./HeroGold.js";


function minuteur(time, parentNode) {

    const dureeMinuteur = time;
    const parent = document.querySelector(parentNode);
    
    const intervalID = setInterval(function () {
        if (dureeMinuteur > 0) {
            miseAJourDecompte(dureeMinuteur);
            dureeMinuteur--;
        } else {
            clearInterval(intervalID);
            parent.innerHTML = "Mission terminée";
            const goldGagne = 10;
            addToHeroGold(goldGagne);
            console.log(`${goldGagne}pièces remportée`);
        }
    }, 1000);
}

function miseAJourDecompte(tempsRestant) {
    const minutes = Math.floor(tempsRestant / 60);
    const secondes = tempsRestant % 60;
    
    parent.innerHTML = "Temps restant : " + minutes + ":" + (secondes < 10 ? "0" : "") + secondes;
}

minuteur(150, ".gameInterface");

export { minuteur };