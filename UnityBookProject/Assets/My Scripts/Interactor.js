#pragma strict

var triggerDistance : float = 7;
internal var controlCenter: GameObject;
internal var cam : GameObject;

function Start() {
	controlCenter = GameObject.Find("Control Center");
	cam = GameObject.Find("Main Camera");
}

function OnMouseEnter(){
	var distFromCam: float = DistanceFromCamera();

	if (distFromCam > triggerDistance) {
		return;
	}
	controlCenter.SendMessage("CursorColorChange", true);
}

function OnMouseExit(){
	controlCenter.SendMessage("CursorColorChange", false);
}

function DistanceFromCamera(){
	var heading : Vector3 = transform.position - cam.transform.position;
	var distance : float = Vector3.Dot(heading, cam.transform.forward);
	return distance;
}