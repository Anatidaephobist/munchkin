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
 var playerLevelContainer;
 var playerGearContainer;
 var createPlayerCard;
 var playerGear;
 var plusIcon;
 var minusIcon;
 var name = "name";
 var level = 1;
 var gear = 0;
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

function setActive() {
    maleIcon = document.getElementById("maleIcon");
    femaleIcon = document.getElementById("femaleIcon");

    if(this.id == "maleIcon") {
        maleIcon.style = "filter: invert(100%);";
        femaleIcon.style = "ilter: invert(0%);"
}
    if(this.id == "femaleIcon") {
        femaleIcon.style = "filter: invert(100%);";
        maleIcon.style = "filter: invert(0%);";
}

}


 function display() {
   console.log(munchkins);
 }


function munchkin() {
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

    randomID();
    munchkins.push(myID);
    

    playerTitle = document.createElement("div");
    playerTitle.className = "cardTitle";
    playerCard.appendChild(playerTitle);

    nameOfPlayer = document.createElement("h1");
    var t = document.createTextNode(name);
    nameOfPlayer.appendChild(t);
    playerTitle.appendChild(nameOfPlayer);

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

    
    playerLevel = document.createElement("h1");
    t = document.createTextNode(level);
    playerLevel.appendChild(t);
    playerLevelContainer.appendChild(playerLevel);

    playerGearTitle = document.createElement("h1");
    t = document.createTextNode("Gear");
    playerGearTitle.appendChild(t);
    playerBody.appendChild(playerGearTitle);
    
    playerGearContainer = document.createElement("div");
    playerGearContainer.className = "playerGear";
    playerGearTitle.appendChild(playerGearContainer);

    
    playerGear = document.createElement("h1");
    t = document.createTextNode(gear);
    playerGear.appendChild(t);
    playerGearContainer.appendChild(playerGear);
    
    


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

function randomID() {
    myID = Math.random().toString(36).substr(2, 16);
    return myID;
}