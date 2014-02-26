#pragma strict

var sendToObject : GameObject;
var correctObject : GameObject;
 
 function OnTriggerEnter(object : Collider){
 	print(object.name);
 	if (object === correctObject.collider) {
 		sendToObject.SendMessage("ToggleTrigger");
 	}
 }
 
  function OnTriggerExit(object : Collider){
  print(object.name);
 	if (object === correctObject.collider) {
 		sendToObject.SendMessage("ToggleTrigger");
 	}
 }
 
 