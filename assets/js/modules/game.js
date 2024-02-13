export class Combat {
  constructor(personnage1, personnage2) {
    this.personnage1 = personnage1;
    this.personnage2 = personnage2;
    this.tour = 1;
  }

  commencerCombat() {
    while (this.personnage1.estEnVie() && this.personnage2.estEnVie()) {
      console.log(`Tour ${this.tour}`);
      this.personnage1.attaquer(this.personnage2);
      if (!this.personnage2.estEnVie()) {
        console.log(`${this.personnage1.nom} a gagné le combat!`);
        
        break;
      }

      this.personnage2.attaquer(this.personnage1);
      if (!this.personnage1.estEnVie()) {
        console.log(`${this.personnage2.nom} a gagné le combat!`);
        break;
      }

      this.tour++;
    }
  }
}