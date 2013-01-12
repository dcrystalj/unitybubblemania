#pragma strict
var onPopParticles : GameObject;
var currentBubble : GameObject;

function Start () {

}

function Update () {

}
function OnDisable(){
	Instantiate(onPopParticles, currentBubble.transform.position, currentBubble.transform.rotation);
	GameC.popped += 1;
	GameC.money += 20;
	GameC.bubblesInGame--;
}