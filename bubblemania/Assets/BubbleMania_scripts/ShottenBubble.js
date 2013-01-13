#pragma strict

// Use this for initialization
function Start () {

}

// Update is called once per frame
function Update () {

}
function OnCollisionExit(trk : Collision){
	if(trk.gameObject.tag=="bubble"){
		GameC.popped += 1;
		GameC.money += 20;
		Destroy(trk.gameObject);
	}
	if(this.gameObject.tag=="projectile")
		Destroy(this.gameObject);
}