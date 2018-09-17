"use strict";
function rpg() {
	var character = window.prompt("Welcome to the start of your adventure to slay the dragon! Tell me are you a SWORDSMAN, MAGE or ROUGE").toUpperCase();
	//switch statement to chose to character
	switch(character) {
		case "SWORDSMAN":
			var sword = window.prompt("Wow, how brave! Do you weild a SHIELD or TWO HANDED SWORD? (SHIELD or SWORD)").toUpperCase();
			
			if(sword === "SHIELD" || sword === "SWORD") {
				document.getElementById("weapon").innerHTML = "Smart choice! Use that weapon to bring peace to the world. Your journey starts now! <br />";
			}
		break;// end of case "Swordsman"
		/////////////////////////////////////////////////////////////////////////////////
		case "MAGE":
			var magic = window.prompt("The spirit of magic dwells within you. Do you cast FIRE or ICE? (FIRE or ICE)").toUpperCase();
			
			if(magic === "FIRE" || magic === "ICE") {
				document.getElementById("weapon").innerHTML = "Smart choice! Use your magic to bring peace to the world. Your journey starts now! <br />";
			}
		break;// end of case "Swordsman"
		/////////////////////////////////////////////////////////////////////////
		case "ROUGE":
			var style = window.prompt("The howls of the night call to you. Do you use DAGGERS in the dark or a BOW from range").toUpperCase();
			
			if (style === "DAGGERS" || style === "BOW") {
				window.alert = "Smart choice! Use your skills to bring peace to the world. Your journey starts now! <br />";
			}
		break;// end of case "Rouge"
		
		default: window.prompt("Please type SWORDSMAN, MAGE, or ROUGE to play the game.");
	}//end of switch statement 
	var start = window.prompt("Your quest begins do you head to the TOWN or go on a HUNT! (TOWN or HUNT)").toUpperCase();
	
	switch(start) { //switch to start your quest
		case "TOWN":
			var store = window.prompt("You wisely choose to go to the town. On your way to the store you see an elder being mugged. Do you STOP the muggers or JOIN them (STOP or JOIN)").toUpperCase();
			
			switch(store) { // switch to choose to help or not
				case "STOP":
					var stop = window.prompt("You have decided to help the man! Choose a number between 1-10 to see if you win. (90%)");
					if (stop < 10) {
						document.getElementById("fight1").innerHTML = "SUCCESS! The muggers have been stopped and the old man gives you 100 gold for your kindness! <br />";					
					} else {
						document.getElementById("death").innerHTML = "FAILURE! The muggers have killed you and the old man. The adventure comes to and end.<br />";
					}
				break; //end of case "stop"
				//////////////////////////////////////////////////////////////////////////////
				case "JOIN":
					var join = window.prompt("You joined the mugging! The old man begins to fight back choose a number between 1 and 10 to see if you win. (90%)");
					
					if (join > 1) {
						document.getElementById("fight1").innerHTML = "SUCCESS! The mugging was a success and the old man is dead the muggers give you 50 gold for the help!<br />";
					} else {
						document.getElementById("death").innerHTML = "FAILURE! The old man has slaughtered you and the muggers. The adventure comes to an end.<br />";
					}
				break; //end of case join
			}//end switch(store)
		break; //end case "town"
		/////////////////////////////////////////////////////////////////////////////////////////////////////////
		case "HUNT": 
			var action1 = window.prompt("You are strolling through the woods when you encounter an ogre do you RUN, FIGHT or TALK").toUpperCase();
				switch(action1) {
					
					case "RUN":
						var run = window.prompt("You choose to run away. Choose a number between 1 and 10 to see if its successful.");
					
						if (run < 10) {
							document.getElementById("action1").innerHTML = "SUCCESS! You managed to escape.";
						} else {
							document.getElementById("death").innerHTML = "FAILURE! You were not fast enough and became the ogres dinner. The adventure comes to an end.<br />";
						}
					break;// end case run
					//////////////////////////////////////////////////////////////////////////////////////////////	
					case "FIGHT":
						if(character === "MAGE") { // mage fight
							var ogreBattleMage = window.prompt("The young Mage cast a spell! Choose a number between 1-10. (30%)");
						
							if (ogreBattleMage <= 9 && ogreBattleMage >= 7) {
								document.getElementById("action1").innerHTML = "SUCCESS! You first spell has worked and slain the ogre which has dropped 150 gold!"; 
							} else {
								document.getElementById("death").innerHTML = "FAILURE! The ogre brushed off your spell and killed you in a single strike. The adventure comes to an end.";
							}
						}
						///////////////////////////////////////////////////////////////////////////////
						if(character === "SWORDSMAN") { //swordsman fight
							var ogreBattleSword = window.prompt("The young Swordsman charges in! Choose a number between 1-10. (70%)");
						
							if (ogreBattleSword <= 10 && ogreBattleSword >= 4) {
								document.getElementById("action1").innerHTML = "SUCCESS! You first attack has worked and slain the ogre which has dropped 150 gold!"; 
							} else {
								document.getElementById("death").innerHTML = "FAILURE! The ogre brushed off your strike and killed you in a single blow. The adventure comes to an end.";
							}
						} 
						///////////////////////////////////////////////////////////////////////////////
						if(character === "ROUGE") { //rouge fight
							var ogreBattleRouge = window.prompt("The nible rouge begins to sneak! Choose a number between 1-10. (30%)");
						
							if (ogreBattleRouge <= 4 && ogreBattleRouge >= 2) {
								document.getElementById("action1").innerHTML = "SUCCESS! You first sneak attack has worked and slain the ogre which has dropped 150 gold!"; 
							} else {
								document.getElementById("death").innerHTML = "FAILURE! The ogre spotted you sneaking and killed you in a single strike. The adventure comes to an end.";
							}
						}
					break;// end case fight
					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					case "TALK":
						if(character === "MAGE") { // mage talk
							var ogreTalkMage = window.prompt("The shy Mage walks up to the troll! Choose a number between 1-10. (50%)");
						
							if (ogreTalkMage <= 5 && ogreTalkMage >=1) {
								document.getElementById("action1").innerHTML = "SUCCESS! The ogre tells you of a near by temple!"; 
							} else {
								document.getElementById("death").innerHTML = "FAILURE! The ogre got annoyed by your shyness and slashed you. The adventurehas come to and end";
							}
						}
						//////////////////////////////////////////////////////////////////////////////
						if(character === "SWORDSMAN") { //swordsman talk
							var ogreTalkSword = window.prompt("The brash swordsman walks towards the ogre! Choose a number between 1-10. (30%)");
						
							if (ogreTalkSword <= 7 && ogreTalkSword >= 5) {
								document.getElementById("action1").innerHTML = "SUCCESS! The ogre tells you of a near by temple!";  
							} else {
								document.getElementById("death").innerHTML = "FAILURE! Your brash attitude puts the ogre into a rage in which he stomps you to death. The adventure has come to an end.";
							}
						} 
						//////////////////////////////////////////////////////////////////////////////////////////////////////
						if(character === "ROUGE") { //rouge fight
							var ogreTalkRouge = window.prompt("The charismatic rouge begins to walk towards the ogre! Choose a number between 1-10. (70%)");
						
							if (ogreTalkRouge <= 8 && ogreTalkRouge >= 2) {
								document.getElementById("action1").innerHTML = "SUCCESS! The ogre tells you of a near by temple!";
							} else {
								document.getElementById("death").innerHTML = "FAILURE! The ogre saw through your decit and crushed you in on slam. The adventure has come to an end;"
							}
						}
					break;//end cse talk
				}				
		break;		
	}//end switch(start)
}//end function	

document.getElementById("button").addEventListener("click", rpg,false);
document.getElementById("button").addEventListener("touchstart", rpg,false);