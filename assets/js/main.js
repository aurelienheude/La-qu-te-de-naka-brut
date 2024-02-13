import { Entite } from './modules/Entite.js';
import { Combat } from './modules/game.js';
import { minuteur} from './modules/minuteur.js'
import{ viewHeroGold } from './modules/HeroGold.js';

const heroStats = {
  hp: 140,
  force: 100,
  defense: 50,
  speed: 122,
  precision: 90,
  esquive: 15,
  chanceCC: 15,
  degatCC: 150
};

const creatureStats = {
  hp: 120,
  force: 110,
  defense: 40,
  speed: 100,
  precision: 90,
  esquive: 1,
  chanceCC: 10,
  degatCC: 120
};

const hero = new Entite("Héros", heroStats);
const creature = new Entite("Créature", creatureStats);

const combat = new Combat(hero, creature);
combat.commencerCombat();

console.log(combat);
console.log(combat.victoire);