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
 var playerBody;
 var playerLevelTitle;
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

 document.getElementById("addPlayer").addEventListener("click", createPlayer);

 document.getElementById("test").addEventListener("click", display);


function createPlayer() {
  blur = document.getElementById("blur");
  createPlayerCard = document.getElementById("createPlayerCard");

  blur.style = "filter: blur(2px);";
  createPlayerCard.style = "display:block;";
  var rings = document.getElementById('outerCircle');
  rings.style = "animation: rotation 9s infinite linear;";
  
}


 function display() {
     console.log(munchkins);
 }


function hide() {
    playerWrapper = document.getElementById("playerWrapper")

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