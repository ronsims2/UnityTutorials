#pragma strict

var aniParent : GameObject;
var aniClip : AnimationClip;
var audioDelay : float = 0;

function Start () {

}

function Update () {

}

function OnMouseDown(){
	print(name + " Picked " + aniClip.name);
	aniParent.animation.Play(aniClip.name);
	if (GetComponent(AudioSource)) {
		yield new WaitForSeconds(audioDelay);
		audio.Play();
		/* single line delay instead of yiled
		audio.PlayDelayed(audioDelay);*/
	}
}