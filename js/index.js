/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var playerCard;
 var blur;
 var playerWrapper;
 var playerTitle;
 var nameOfPlayer;
 var numberOfPlayers = 0;
 var playerCount;
 var addButton;
 var playerBody;
 var playerLevelTitle;
 var rings;
 var playerGearTitle;
 var playerStrengthTitle;
 var playerStrength;
 var playerStrengthContainer;
 var playerLevelContainer;
 var playerGearContainer;
 var createPlayerCard;
 var playerGear;
 var addGearIcon;
 var plusIcon;
 var gameOver = false;
 var munchkinName;
 var minusIcon;
 var maleIconIsActive = false;
 var femaleIconIsActive = false;
 var name = "";
 var level = 1;
 var gear = 0;
 var id = 0;
 var gearId = 0;
 var playerId = 0;
 var levelId = 0;
 var strengthId = 0;
 var strength = level+gear;
 var munchkins = [];
 var maleIcon;
 var femaleIcon;

 document.getElementById("addPlayer").addEventListener("click", createPlayer);
 document.getElementById("createMunchkin").addEventListener("click", munchkin);
 document.getElementById("test").addEventListener("click", display);
 document.getElementById("maleIcon").addEventListener("click", setActive);
 document.getElementById("femaleIcon").addEventListener("click", setActive);
 


function createPlayer() {

    
 
  addButton = document.getElementById("addPlayer");
  createPlayerCard = document.getElementById("createPlayerCard");
  let buttons = document.getElementsByClassName("cardButton");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; 
    }
  
  var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "x";
    cancelButton.onclick = () => {
        hideCreatePlayer();
    }
    cancelButton.setAttribute("id", "cancelCreation");
    createPlayerCard.appendChild(cancelButton);
    
  

  blur = document.getElementById("blur");
  blur.style = "filter: blur(3px);";
  createPlayerCard.style = "display:block;";
  rings = document.getElementById('outerCircle');
  rings.style = "animation: rotation 9s infinite linear;";
  
}



function setActive() {
    maleIcon = document.getElementById("maleIcon");
    femaleIcon = document.getElementById("femaleIcon");

    if(this.id == "maleIcon") {
        maleIcon.style = "filter: invert(100%);";
        femaleIcon.style = "ilter: invert(0%);";
        maleIconIsActive = true;
        femaleIconIsActive = false;
}
    if(this.id == "femaleIcon") {
        femaleIcon.style = "filter: invert(100%);";
        maleIcon.style = "filter: invert(0%);";
        maleIconIsActive = false;
        femaleIconIsActive = true;
}

}


 function display() {
   console.log(munchkins);
 }


function munchkin() {
    randomID();
    munchkins.push(myID);

    let isName;
    name = document.getElementById("munchkinNameInput").value;

    isName = name.trim();

    if(isName == "" || !maleIconIsActive && !femaleIconIsActive) {
        alert("You need to have both name and gender");
        return;
    } else {
    document.getElementById("cancelCreation").remove();
    let buttons = document.getElementsByClassName("cardButton");
    document.getElementById("munchkinNameInput").value = "";
    document.getElementById("maleIcon").style = "filter: invert(0%)";
    document.getElementById("femaleIcon").style = "filter: invert(0%)";
    playerWrapper = document.getElementById("playerWrapper");
    createPlayerCard = document.getElementById("createPlayerCard");
    
    addButton = document.getElementById("addPlayer");
    blur = document.getElementById("blur");
    blur.style = "filter: blur(0px);";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
    }
    createPlayerCard.style = "display:none;";
    rings.style = "animation: ;";


    playerCard = document.createElement("div");
    playerCard.className = "player card";
    let playerCardId = "playerCard"+playerId;
    playerId++;
    playerCard.setAttribute("id", playerCardId);
    playerWrapper.appendChild(playerCard);
   
   
    playerTitle = document.createElement("div");
    
    playerTitle.className = "cardTitle";
    playerCard.appendChild(playerTitle);
    nameOfPlayer = document.createElement("h1");
   
    var t = document.createTextNode(name);
    var g = document.createElement("IMG");
    if(maleIconIsActive) {
        g.setAttribute("id","male");
    g.src = "./img/maleIcon.png";
    } else if(femaleIconIsActive) {
        g.setAttribute("id","female");
        g.src = "./img/femaleIcon.png";
    }

    nameOfPlayer.appendChild(t);
    playerTitle.appendChild(nameOfPlayer);
    playerTitle.appendChild(g);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.onclick = () => {
        areYouSure(playerCardId);
    }
    deleteButton.className = "deleteButton";
    deleteButton.classList += " cardButton";
    nameOfPlayer.appendChild(deleteButton);
    
    playerBody = document.createElement("div");
    playerBody.className = "playerBody";
    playerCard.appendChild(playerBody);

   
    playerLevelTitle = document.createElement("h1");
    t = document.createTextNode("Level");
    playerLevelTitle.appendChild(t);
  
    playerBody.appendChild(playerLevelTitle);
    
    playerLevelContainer = document.createElement("div");
    playerLevelContainer.className = "playerLevel";
    playerLevelTitle.appendChild(playerLevelContainer);

    
    playerLevel = document.createElement("h2");
    plvl = document.createTextNode(level);
    let levelTotalId = "levelTotal"+levelId;
    levelId++;
    playerLevel.setAttribute("id", levelTotalId);
    playerLevel.appendChild(plvl);
    playerLevelContainer.appendChild(playerLevel);

    playerGearTitle = document.createElement("h1");
    t = document.createTextNode("Gear");
    playerGearTitle.appendChild(t);
    playerGearTitle.className = "playerGearTitle";
    playerBody.appendChild(playerGearTitle);
    
    playerGearContainer = document.createElement("div");
    playerGearContainer.className = "playerGear";
    playerGearTitle.appendChild(playerGearContainer);

    
    playerGear = document.createElement("h2");
    t = document.createTextNode(gear);
    let gearTotalId = "gearTotal"+gearId;
    gearId++;
    playerGear.setAttribute("id", gearTotalId);
    playerGear.appendChild(t);

    playerStrengthTitle = document.createElement("h1");
    t = document.createTextNode("Strength");
    playerStrengthTitle.appendChild(t);
    playerStrengthTitle.className = "playerStrengthTitle";
  
    playerBody.appendChild(playerStrengthTitle);
    
    playerStrengthContainer = document.createElement("div");
    playerStrengthContainer.className = "playerStrength";
    playerStrengthTitle.appendChild(playerStrengthContainer);

    
    playerStrength = document.createElement("h2");
    t = document.createTextNode(strength);
    let strengthTotalId = "strengthTotal"+strengthId;
    strengthId++;
    playerStrength.setAttribute("id", strengthTotalId);
    playerStrength.appendChild(t);
    playerStrengthContainer.appendChild(playerStrength);


    var addLevelIcon = document.createElement("button");
    lp = document.createTextNode("+1");
    addLevelIcon.className = "addLevelIcon";
    addLevelIcon.classList += " cardButton";
    addLevelIcon.onclick = () => {
        if(!gameOver) {
            increaseLevelValue(levelTotalId, strengthTotalId);
        }
        
    }
    addLevelIcon.appendChild(lp);

    removeLevelIcon = document.createElement("button");
    lm = document.createTextNode("-1");
    removeLevelIcon.className = "removeLevelIcon";
    removeLevelIcon.classList += " cardButton";
    removeLevelIcon.onclick = () => {
        if(!gameOver) {
        decreaseLevelValue(levelTotalId, strengthTotalId);
    }
}
    removeLevelIcon.appendChild(lm);

    
    playerGearContainer.appendChild(playerGear);
    playerLevelTitle.appendChild(addLevelIcon);
    playerLevelTitle.appendChild(removeLevelIcon);

    addGearIcon = document.createElement("button");
    gp = document.createTextNode("+1");
    addGearIcon.className = "addGearIcon";
    addGearIcon.classList += " cardButton";
    addGearIcon.onclick = () => {
        if(!gameOver) {
        increaseGearValue(gearTotalId, strengthTotalId);
     }
    }
    addGearIcon.appendChild(gp);

    removeGearIcon = document.createElement("button");
    gm = document.createTextNode("-1");
    removeGearIcon.className = "removeGearIcon";
    removeGearIcon.classList += " cardButton";
    removeGearIcon.onclick = () => {
        if(!gameOver) {
        decreaseGearValue(gearTotalId, strengthTotalId);
     }
    }
    removeGearIcon.appendChild(gm);

    playerGearTitle.appendChild(addGearIcon);
    playerGearTitle.appendChild(removeGearIcon);
    
    


    numberOfPlayers++;
    playerCount = document.getElementById("numberOfPlayers");
    playerCount.innerHTML = numberOfPlayers;


    if(numberOfPlayers > 9) {
       playerCount.style = "top:15px;"
       playerCount.style = "font-size:11px;";
      
        
    }
    
}
   
}

function hideCreatePlayer() {
    let createPlayerCard = document.getElementById("createPlayerCard");
    let buttons = document.getElementsByClassName("cardButton");
    let maleIcon = document.getElementById("maleIcon");

    let blur = document.getElementById("blur");
    document.getElementById("cancelCreation").remove();
    document.getElementById("munchkinNameInput").value = "";
    createPlayerCard.style.display = "none";
    blur.style = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
    }
    document.getElementById("maleIcon").style = "filter: invert(0%)";
    document.getElementById("femaleIcon").style = "filter: invert(0%)";
    this.maleIconIsActive = false;
    this.femaleIconIsActive = false;
}

function increaseLevelValue(id, strId) {
   let element = document.getElementById(id);
   if(element.innerText < 10) {
    element.innerText++;
   } else {
       return;
   }
  
   if(element.innerText< 0) {
    return;
   } else {
    increaseStrength(strId);
   }
   if(element.innerText == 9) {
    winnerDinnerChickenDinner();
    return;
}
}

function deleteCard(id) {
    let element = document.getElementById(id);
    document.getElementById("confirmBox").style.display = "none";
    let blur = document.getElementById("blur");
    let buttons = document.getElementsByClassName("cardButton");
    blur.style = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
    }
    
    element.remove();
    numberOfPlayers--;
    playerCount = document.getElementById("numberOfPlayers");
    playerCount.innerHTML = numberOfPlayers;
    if(playerCount.innerHTML == 0) {
    playerCount.innerHTML = "";
}


}

function areYouSure(element) {
let buttons = document.getElementsByClassName("cardButton");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let blur = document.getElementById("blur");

document.getElementById("confirmBox").style.display = "block";
blur.style = "filter: blur(3px);";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true; 
}

yesBtn.onclick = () => {
    deleteCard(element);
}
noBtn.onclick = () => {
    hideConfirmation();
}

}



function hideConfirmation() {
    let element = document.getElementById(id);
    document.getElementById("confirmBox").style.display = "none";
    let buttons = document.getElementsByClassName("cardButton");
    let blur = document.getElementById("blur");
    blur.style = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
    }
}

function decreaseLevelValue(id, strId) {
    let element = document.getElementById(id);
    element.innerText--;
    if(element.innerText >= 1) {
    decreaseStrength(strId);
    } else {
        element.innerText = 1;
        return;
    }
    
}

function winnerDinnerChickenDinner() {
   /* gameOver = true;
    let element = document.getElementById("addPlayer");
    element.setAttribute("disabled", "true");
    console.log("WIN");
    */
}

function increaseGearValue(id, strId) {
    let element = document.getElementById(id);
    let value = element.innerText++;
    if(value < 0) {
     return;
    } else {
     increaseStrength(strId);
    }
}

function decreaseGearValue(id, strId) {
    let element = document.getElementById(id);
    element.innerText--;
    if(element.innerText >= 0) {
    decreaseStrength(strId);
    } else {
        element.innerText = 0;
        return;
    }
}



function increaseStrength(strId) {
   document.getElementById(strId).innerText++;
}

function decreaseStrength(strId) {
    document.getElementById(strId).innerText--;
}

function randomID() {
   myID = Math.random().toString(36).substr(2, 16);
    return myID;
}
