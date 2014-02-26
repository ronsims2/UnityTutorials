#pragma strict

var myDegrees = 100;
var rotationState : int = 1;
function Update () {
	if (rotationState == 1) {
		transform.Rotate(0, myDegrees * Time.deltaTime, 0);
	}
	//transform.Translate(2 * Time.deltaTime, 0, 0);
}

function OnMouseDown(){
	if (rotationState == 1) {
		rotationState = 0;
	}
	else if (rotationState == 0) {
		rotationState = 1;
	}
	//print("State = " + rotationState);
}