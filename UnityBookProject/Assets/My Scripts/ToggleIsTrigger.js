#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown("t")) {
		ToggleTrigger();
	}
}

function ToggleTrigger(){
	if (collider.isTrigger) {
		collider.isTrigger = false;
		print("Closed");
	}
	else{
		collider.isTrigger = true;
		print("Opened");
	}
}