#pragma strict

var defaultCursor : Texture;
internal var currentCursor : Texture;
internal var currentCursorColor: Color;
var navigating : boolean;
var mouseOverColor : Color = Color.green;

function Awake() {
	Screen.SetResolution(1280, 800, false);//false means not full screen
}

function Start(){
	Screen.showCursor = true;
	currentCursor = defaultCursor;
	currentCursorColor = Color.white;
}

function Update() {
	
	
	if (Input.GetAxis("Horizontal") || Input.GetAxis("Vertical") || Input.GetAxis("Turn") || Input.GetButton("ML Enable")) {
			navigating = true;
		}
		else {
			navigating = false;
		}
}

function CursorColorChange(colorize: boolean){
	if (colorize) {
		currentCursorColor = mouseOverColor;
	}
	else {
		currentCursorColor = Color.white;
	}
}

//FixedUpdate should be here

function OnGUI(){
	if (!navigating) {
		var pos : Vector2 = Input.mousePosition;
		GUI.color = currentCursorColor;
		GUI.DrawTexture(Rect(pos.x, Screen.height - pos.y, 64, 64), currentCursor);
		GUI.color = Color.white;
	}
}