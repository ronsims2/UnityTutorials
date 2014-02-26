#pragma strict

private var pickNum : int =0;

function OnMouseDown () {
	pickNum++;
	print("This Object was picked " + pickNum + " times.");
}