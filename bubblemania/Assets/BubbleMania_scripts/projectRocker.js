#pragma strict
var myExplosion : GameObject;
var myTarget : Transform;
var myRange : float = 10;
var mySpeed : float = 10;

private var myDist : float;

function Start () {

}

function Update () {
	Debug.Log("mUpdate");
	transform.Translate(Vector3.forward*Time.deltaTime*mySpeed);
	myDist += Time.deltaTime*mySpeed;
	
	if(myDist >= myRange){
		Destroy(gameObject);
		Explode();	
	}
	if(myTarget){
		Debug.Log("myTarget");
		transform.LookAt(myTarget);
	}
	else{
		Destroy(gameObject);
		Explode();
	}
}
function OnTriggerEnter(other : Collider){

	Debug.Log("zadel");
	if(other.gameObject.tag == "bubble"){
		Explode();
	}
}
function Explode(){
	Instantiate(myExplosion,transform.position,Quaternion.identity);
	Destroy(gameObject);
}