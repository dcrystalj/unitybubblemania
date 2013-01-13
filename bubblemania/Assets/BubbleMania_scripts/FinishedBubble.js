#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionExit(trk : Collision){
	if(trk.gameObject.tag=="bubble"){
		Destroy(trk.gameObject);
		GameC.lives -= 1;
		if(GameC.lives<1)
			Application.LoadLevel("gameOver");
	}
}