let heroExpAmounts = 0;

function addToHeroExp(amount) {
  heroGoldAmounts += amount;
}

function viewHeroExp(){
  console.log(heroExpAmounts);
}

export { heroExpAmounts, addToHeroExp, viewHeroExp };