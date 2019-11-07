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
 var munchkinName;
 var minusIcon;
 var maleIconIsActive = false;
 var femaleIconIsActive = false;
 var name = "";
 var level = 1;
 var gear = 0;
 var id = 0;
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
  blur = document.getElementById("blur");
  addButton = document.getElementById("addPlayer");
  createPlayerCard = document.getElementById("createPlayerCard");
 
  blur.style = "filter: blur(3px);";
  createPlayerCard.style = "display:block;";
  rings = document.getElementById('outerCircle');
  rings.style = "animation: rotation 9s infinite linear;";
  
}

function addMunchkinLevel() {
this.level+=1;
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
    document.getElementById("munchkinNameInput").value = "";
    document.getElementById("maleIcon").style = "filter: invert(0%)";
    document.getElementById("femaleIcon").style = "filter: invert(0%)";
    playerWrapper = document.getElementById("playerWrapper");
    createPlayerCard = document.getElementById("createPlayerCard");
    blur = document.getElementById("blur");
    addButton = document.getElementById("addPlayer");


    blur.style = "filter: blur(0px);";
    createPlayerCard.style = "display:none;";
    rings.style = "animation: ;";


    playerCard = document.createElement("div");
    playerCard.className = "player card";
    playerWrapper.appendChild(playerCard);
   
   
    playerTitle = document.createElement("div");
    
    playerTitle.className = "cardTitle";
    playerCard.appendChild(playerTitle);
    t = document.createTextNode(id);
    playerTitle.appendChild(t);
    

    nameOfPlayer = document.createElement("h1");
   
    var t = document.createTextNode(name);
    var g = document.createElement("IMG");
    if(maleIconIsActive) {
    g.src = "./img/maleIcon.png";
    } else if(femaleIconIsActive) {
        g.src = "./img/femaleIcon.png";
    }

    nameOfPlayer.appendChild(t);
    playerTitle.appendChild(nameOfPlayer);
    playerTitle.appendChild(g);
    
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
    playerLevel.setAttribute("id", id);
    
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
    playerStrength.appendChild(t);
    playerStrengthContainer.appendChild(playerStrength);


    var addLevelIcon = document.createElement("button");
    lp = document.createTextNode("+1");
    addLevelIcon.className = "addLevelIcon";
    addLevelIcon.setAttribute("id", id++);
    addLevelIcon.onclick = (event) => {
        let playerLvlHtml = document.getElementById(event.target.id);
        let playerLVL = playerLvlHtml.innerText;
        playerLVL++;
        playerLvlHtml.innerHTML = playerLVL;
        
    }
    addLevelIcon.appendChild(lp);

    removeLevelIcon = document.createElement("button");
    lm = document.createTextNode("-1");
    removeLevelIcon.className = "removeLevelIcon";
    removeLevelIcon.setAttribute("id", "removeLevel");
    removeLevelIcon.appendChild(lm);

    
    playerGearContainer.appendChild(playerGear);
    playerLevelTitle.appendChild(addLevelIcon);
    playerLevelTitle.appendChild(removeLevelIcon);

    addGearIcon = document.createElement("button");
    gp = document.createTextNode("+1");
    addGearIcon.className = "addGearIcon";
    addGearIcon.setAttribute("id", "addGear");
    addGearIcon.appendChild(gp);

    removeGearIcon = document.createElement("button");
    gm = document.createTextNode("-1");
    removeGearIcon.className = "removeGearIcon";
    removeGearIcon.setAttribute("id", "removeGear");
    removeGearIcon.appendChild(gm);

    playerGearTitle.appendChild(addGearIcon);
    playerGearTitle.appendChild(removeGearIcon);
    
    


    /** 

    plusIcon = document.createElement("img");
    plusIcon.className = "plusIcon";
    plusIcon.src = "./img/plusIcon.png";
    playerLevelContainer.appendChild(plusIcon);

    minusIcon = document.createElement("img");
    minusIcon.className = "minusIcon";
    minusIcon.src = "./img/minusIcon.png";
    playerLevelContainer.appendChild(minusIcon);
    
*/
    numberOfPlayers++;
    playerCount = document.getElementById("numberOfPlayers");
    playerCount.innerHTML = numberOfPlayers;


    if(numberOfPlayers > 9) {
       playerCount.style = "top:15px;"
       playerCount.style = "font-size:11px;";
      
        
    }
    
}
   
}

function randomID() {
   myID = Math.random().toString(36).substr(2, 16);
    return myID;
}