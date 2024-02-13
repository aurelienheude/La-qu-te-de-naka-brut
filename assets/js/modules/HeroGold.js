let heroGoldAmounts = 0;

function addToHeroGold(amount) {
  heroGoldAmounts += amount;
}

function viewHeroGold(){
  console.log(heroGoldAmounts);
}

export { heroGoldAmounts, addToHeroGold, viewHeroGold };