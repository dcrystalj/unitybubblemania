#pragma strict
var myProjectile:GameObject;
var reloadTime:float=1f;
var turnSpeed:float=5f;
var firePauseTime:float=.25f;
var muzzleEffect:GameObject;
var errorAmount:float=.001;
var myTarget : Transform;
var muzzlePositions : Transform[];
var turretBall : Transform;
var detectionRange : float;

private var nextFireTime:float;
private var nextMoveTime:float;
private var desiredRotation : Quaternion;
private var aimError:float;
private var sphereCollider : SphereCollider; 
private var nextTarget : Transform;


function Start () {
	//sphereCollider= this.gameObject.GetComponent(SphereCollider);
}

function Update () {
	//var object = this.gameObject;
	//Handles.DrawWireDisc( gameObject.transform.position, Camera.mainCamera.transform.forward, sphereCollider.radius );
	if(myTarget){	
		//turretBall.transform.LookAt(myTarget);
		if(Time.time>=nextFireTime){
			FireProjectile();
		}
		if(Time.time >= nextMoveTime){
			CalculateAimPosition(myTarget.position);
			turretBall.rotation=Quaternion.Lerp(turretBall.rotation, desiredRotation, Time.deltaTime*turnSpeed);	
		}	
	}
	else if(nextTarget!=null){
		myTarget=nextTarget;
		nextTarget=null;
	}

}
function OnTriggerEnter(other : Collider){
	if(myTarget==null && other.gameObject.tag=="bubble"){
		nextFireTime=Time.time+(reloadTime*.5);
		myTarget=other.gameObject.transform;
	}
	else if (nextTarget==null && other.gameObject.tag=="bubble"){
		nextTarget=other.gameObject.transform;
	}
}
//Izbrisemo tarco, ko gre element iz obsega
function OnTriggerExit(other : Collider){
	if(other.gameObject.transform == myTarget){
		myTarget=null;
	}

}
function CalculateAimPosition(targetPos : Vector3)
{
	//Upostevamo da stolp lahko slabo meri
	var aimPoint = Vector3(targetPos.x-transform.position.x+aimError, targetPos.y-transform.position.y+aimError, targetPos.z-transform.position.z+aimError);
	desiredRotation = Quaternion.LookRotation(aimPoint);
}
//Moznost slabega merjenja stolpa
function CalculateAimError(){
	aimError=Random.Range(-errorAmount, errorAmount);
}
function FireProjectile(){
	audio.Play();
	nextFireTime=Time.time+reloadTime;
	nextMoveTime=Time.time+firePauseTime;
	CalculateAimError();
	for(theMuzzlePos in muzzlePositions){
		Instantiate(myProjectile, theMuzzlePos.position, theMuzzlePos.rotation);
		Instantiate(muzzleEffect, theMuzzlePos.position, theMuzzlePos.rotation);
		
	}

}
