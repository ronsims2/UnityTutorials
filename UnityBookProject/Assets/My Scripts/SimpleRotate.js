#pragma strict

var myDegrees = 100;
internal var rotationState : int = 1;
function Update () {
	transform.Rotate(0, myDegrees * Time.deltaTime, 0);
	//transform.Translate(2 * Time.deltaTime, 0, 0);
}