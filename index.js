//Username - Class - Race - Background (user Information)
document.getElementById('userInformation').elements[0].value = localStorage.getItem('name');
document.getElementById('userInformation').elements[1].value = localStorage.getItem('class');
document.getElementById('userInformation').elements[2].value = localStorage.getItem('race');
document.getElementById('userInformation').elements[3].value = localStorage.getItem('background');

//Skills
document.getElementById('skillsNum').elements[0].value = localStorage.getItem('acrobatics');
document.getElementById('skillsNum').elements[1].value = localStorage.getItem('animalHandling');
document.getElementById('skillsNum').elements[2].value = localStorage.getItem('athletics');
document.getElementById('skillsNum').elements[3].value = localStorage.getItem('arcana');
document.getElementById('skillsNum').elements[4].value = localStorage.getItem('deception');
document.getElementById('skillsNum').elements[5].value = localStorage.getItem('history');
document.getElementById('skillsNum').elements[6].value = localStorage.getItem('insight');
document.getElementById('skillsNum').elements[7].value = localStorage.getItem('intimidation');
document.getElementById('skillsNum').elements[8].value = localStorage.getItem('investigation');
document.getElementById('skillsNum').elements[9].value = localStorage.getItem('medicine');
document.getElementById('skillsNum').elements[10].value = localStorage.getItem('nature');
document.getElementById('skillsNum').elements[11].value = localStorage.getItem('perception');
document.getElementById('skillsNum').elements[12].value = localStorage.getItem('performance');
document.getElementById('skillsNum').elements[13].value = localStorage.getItem('persuasion');
document.getElementById('skillsNum').elements[14].value = localStorage.getItem('religion');
document.getElementById('skillsNum').elements[15].value = localStorage.getItem('sleightOfHand');
document.getElementById('skillsNum').elements[16].value = localStorage.getItem('stealth');
document.getElementById('skillsNum').elements[17].value = localStorage.getItem('survival');

//attacks
document.getElementById('attackName').elements[0].value = localStorage.getItem('attack0');
document.getElementById('attackName').elements[1].value = localStorage.getItem('attack1');
document.getElementById('attackName').elements[2].value = localStorage.getItem('attack2');
document.getElementById('attackName').elements[3].value = localStorage.getItem('attack3');
document.getElementById('attackName').elements[4].value = localStorage.getItem('attack4');
document.getElementById('attackName').elements[5].value = localStorage.getItem('attack5');
document.getElementById('attackName').elements[6].value = localStorage.getItem('attack6');
document.getElementById('attackName').elements[7].value = localStorage.getItem('attack7');
document.getElementById('attackName').elements[8].value = localStorage.getItem('attack8');

//toHit
document.getElementById('toHitNum').elements[0].value = localStorage.getItem('toHitNum0');
document.getElementById('toHitNum').elements[1].value = localStorage.getItem('toHitNum1');
document.getElementById('toHitNum').elements[2].value = localStorage.getItem('toHitNum2');
document.getElementById('toHitNum').elements[3].value = localStorage.getItem('toHitNum3');
document.getElementById('toHitNum').elements[4].value = localStorage.getItem('toHitNum4');
document.getElementById('toHitNum').elements[5].value = localStorage.getItem('toHitNum5');
document.getElementById('toHitNum').elements[6].value = localStorage.getItem('toHitNum6');
document.getElementById('toHitNum').elements[7].value = localStorage.getItem('toHitNum7');
document.getElementById('toHitNum').elements[8].value = localStorage.getItem('toHitNum8');

//attackDice
document.getElementById('attackDiceNum').elements[0].value = localStorage.getItem('attackDiceNum0');
document.getElementById('attackDiceNum').elements[1].value = localStorage.getItem('attackDiceNum1');
document.getElementById('attackDiceNum').elements[2].value = localStorage.getItem('attackDiceNum2');
document.getElementById('attackDiceNum').elements[3].value = localStorage.getItem('attackDiceNum3');
document.getElementById('attackDiceNum').elements[4].value = localStorage.getItem('attackDiceNum4');
document.getElementById('attackDiceNum').elements[5].value = localStorage.getItem('attackDiceNum5');
document.getElementById('attackDiceNum').elements[6].value = localStorage.getItem('attackDiceNum6');
document.getElementById('attackDiceNum').elements[7].value = localStorage.getItem('attackDiceNum7');
document.getElementById('attackDiceNum').elements[8].value = localStorage.getItem('attackDiceNum8');

//equipments, Features and Spells
document.getElementById('equipments').value = localStorage.getItem('userEquipments');
document.getElementById('features').value = localStorage.getItem('userFeatures');
document.getElementById('spells').value = localStorage.getItem('userSpells');

function saveSheet() {
  saveUserInformation()
  saveSkills()
  saveAttacks()
  saveToHitNum()
  saveAttackDiceNum()
  saveEquipmentFeaturesSpells()
}

function saveUserInformation() {
  localStorage.setItem('name', document.getElementById('userInformation').elements[0].value);
  localStorage.setItem('class', document.getElementById('userInformation').elements[1].value);
  localStorage.setItem('race', document.getElementById('userInformation').elements[2].value);
  localStorage.setItem('background', document.getElementById('userInformation').elements[3].value);
}

function saveSkills() {
  localStorage.setItem('acrobatics', document.getElementById('skillsNum').elements[0].value);
  localStorage.setItem('animalHandling', document.getElementById('skillsNum').elements[1].value);
  localStorage.setItem('athletics', document.getElementById('skillsNum').elements[2].value);
  localStorage.setItem('arcana', document.getElementById('skillsNum').elements[3].value);
  localStorage.setItem('deception', document.getElementById('skillsNum').elements[4].value);
  localStorage.setItem('history', document.getElementById('skillsNum').elements[5].value);
  localStorage.setItem('insight', document.getElementById('skillsNum').elements[6].value);
  localStorage.setItem('intimidation', document.getElementById('skillsNum').elements[7].value);
  localStorage.setItem('investigation', document.getElementById('skillsNum').elements[8].value);
  localStorage.setItem('medicine', document.getElementById('skillsNum').elements[9].value);
  localStorage.setItem('nature', document.getElementById('skillsNum').elements[10].value);
  localStorage.setItem('perception', document.getElementById('skillsNum').elements[11].value);
  localStorage.setItem('performance', document.getElementById('skillsNum').elements[12].value);
  localStorage.setItem('persuasion', document.getElementById('skillsNum').elements[13].value);
  localStorage.setItem('religion', document.getElementById('skillsNum').elements[14].value);
  localStorage.setItem('sleightOfHand', document.getElementById('skillsNum').elements[15].value);
  localStorage.setItem('stealth', document.getElementById('skillsNum').elements[16].value);
  localStorage.setItem('survival', document.getElementById('skillsNum').elements[17].value);
}

function saveAttacks() {
  localStorage.setItem('attack0', document.getElementById('attackName').elements[0].value);
  localStorage.setItem('attack1', document.getElementById('attackName').elements[1].value);
  localStorage.setItem('attack2', document.getElementById('attackName').elements[2].value);
  localStorage.setItem('attack3', document.getElementById('attackName').elements[3].value);
  localStorage.setItem('attack4', document.getElementById('attackName').elements[4].value);
  localStorage.setItem('attack5', document.getElementById('attackName').elements[5].value);
  localStorage.setItem('attack6', document.getElementById('attackName').elements[6].value);
  localStorage.setItem('attack7', document.getElementById('attackName').elements[7].value);
  localStorage.setItem('attack8', document.getElementById('attackName').elements[8].value);
}

function saveToHitNum() {
  localStorage.setItem('toHitNum0', document.getElementById('toHitNum').elements[0].value);
  localStorage.setItem('toHitNum1', document.getElementById('toHitNum').elements[1].value);
  localStorage.setItem('toHitNum2', document.getElementById('toHitNum').elements[2].value);
  localStorage.setItem('toHitNum3', document.getElementById('toHitNum').elements[3].value);
  localStorage.setItem('toHitNum4', document.getElementById('toHitNum').elements[4].value);
  localStorage.setItem('toHitNum5', document.getElementById('toHitNum').elements[5].value);
  localStorage.setItem('toHitNum6', document.getElementById('toHitNum').elements[6].value);
  localStorage.setItem('toHitNum7', document.getElementById('toHitNum').elements[7].value);
  localStorage.setItem('toHitNum8', document.getElementById('toHitNum').elements[8].value);
}

function saveAttackDiceNum() {
  localStorage.setItem('attackDiceNum0', document.getElementById('attackDiceNum').elements[0].value);
  localStorage.setItem('attackDiceNum1', document.getElementById('attackDiceNum').elements[1].value);
  localStorage.setItem('attackDiceNum2', document.getElementById('attackDiceNum').elements[2].value);
  localStorage.setItem('attackDiceNum3', document.getElementById('attackDiceNum').elements[3].value);
  localStorage.setItem('attackDiceNum4', document.getElementById('attackDiceNum').elements[4].value);
  localStorage.setItem('attackDiceNum5', document.getElementById('attackDiceNum').elements[5].value);
  localStorage.setItem('attackDiceNum6', document.getElementById('attackDiceNum').elements[6].value);
  localStorage.setItem('attackDiceNum7', document.getElementById('attackDiceNum').elements[7].value);
  localStorage.setItem('attackDiceNum8', document.getElementById('attackDiceNum').elements[8].value);
}

function saveEquipmentFeaturesSpells() {
  localStorage.setItem('userEquipments', document.getElementById('equipments').value)
  localStorage.setItem('userFeatures', document.getElementById('features').value)
  localStorage.setItem('userSpells', document.getElementById('spells').value)
}