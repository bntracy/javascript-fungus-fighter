// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let userAP = 100;

function onReady() {
    // console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    renderAP();
    renderHP();
    setInterval(regen, 1000);
}


onReady()

function attack(apLost, hpLost) {
  // console.log('button clicked');
  userAP -= apLost;
  if (userAP < 0) {
    userAP = 0;
  }
  fungusHP -= hpLost;
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  renderAP();
  renderHP();
  if (fungusHP == 0) {
    userWins();
  } else if (userAP == 0) {
    fungusWins();
  }
}

function renderAP() {
    document.querySelector('.ap-text').innerHTML = userAP + ' AP';
    document.getElementById('ap-meter').value = userAP;
}

function renderHP() {
    document.querySelector('.hp-text').innerHTML = fungusHP + ' HP';
    document.getElementById('hp-meter').value = fungusHP;
}

function userWins() {
    // fungus goes boom
    document.querySelector('.freaky-fungus').classList.remove('walk');
    document.querySelector('.freaky-fungus').classList.add('dead');
}

function fungusWins() {
    // fungus rejoices
    document.querySelector('.freaky-fungus').classList.remove('walk');
    document.querySelector('.freaky-fungus').classList.add('jump');
    // disable the buttons
    document.querySelector('.arcane-scepter').disabled = true;
    document.querySelector('.entangle').disabled = true;
    document.querySelector('.dragon-blade').disabled = true;
    document.querySelector('.star-fire').disabled = true;
}

function regen() {
    // console.log('in regen');
    if (fungusHP < 50) {
        fungusHP++;
        renderHP();
    }
}