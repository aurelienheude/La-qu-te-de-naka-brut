export class Entite {
  constructor(nom, stats) {
    this.nom = nom;
    this.hp = stats.hp;
    this.force = stats.force;
    this.defense = stats.defense;
    this.speed = stats.speed;
    this.precision = stats.precision;
    this.esquive = stats.esquive;
    this.chanceCC = stats.chanceCC;
    this.degatCC = stats.degatCC;
  }

  damage() {
    let damageTaken = this.force - this.defense;

    console.log("attaque réussite ! -", damageTaken)
    return damageTaken;
  }

  hpAfterDamage() {
    const damageTaken = this.damage();
    let newHp = Math.max(this.hp - damageTaken, 0);
    return newHp;
  }

  chanceDeToucher(defender) {
    if (this.speed === 0) {
      console.error("Erreur: La vitesse de l'attaquant est zéro.");
      return 0;
    } else if (defender.speed === 0) {
      console.error("Erreur: La vitesse du défenseur est zéro.");
      return 0;
    }

    const chancetouch = Math.floor(Math.random() * 100);

    if (chancetouch < 95) {
      console.log("L'action a réussi !");
    } else {
      console.log("L'action a échoué.");
    }

    return chancetouch;
  }

  attaquer(defender) {
    const chanceTouch = this.chanceDeToucher(defender);
    if (Math.random() * 100 < chanceTouch) {
      console.log(`${this.nom} attaque ${defender.nom}.`);
      const newHp = defender.hpAfterDamage();
      console.log(`${defender.nom} a maintenant ${newHp} points de vie.`);
      defender.hp = newHp;
    } else {
      console.log(`${this.nom} a manqué son attaque contre ${defender.nom}.`);
    }
  }

  estEnVie() {
    return this.hp > 0;
  }
}
