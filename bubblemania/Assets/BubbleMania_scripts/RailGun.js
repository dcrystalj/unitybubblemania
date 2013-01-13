#pragma strict
var myProjectile:GameObject;
var reloadTime:float=1f;
var turnSpeed:float=5f;
var firePauseTime:float=.25f;
var muzzleEffect:GameObject;
var errorAmount:float=.001;
var myTarget : Transform;
var muzzlePositions : Transform[];
var pivot_Tilt : Transform;
var pivot_Pan : Transform;
var aim_Tilt : Transform;
var aim_Pan : Transform;
var towerCamera : Transform;

private var nextFireTime:float;
private var nextMoveTime:float;
private var desiredRotation : Quaternion;
private var aimError:float;
private var nextTarget : Transform;

function Start () {

}

function Update () {
	if(myTarget){
		aim_Pan.LookAt(myTarget);
		aim_Pan.eulerAngles = Vector3(0,aim_Pan.eulerAngles.y,0);
		aim_Tilt.LookAt(myTarget);

		if(towerCamera!=null){
			towerCamera.LookAt(myTarget);
		}
		pivot_Pan.rotation = Quaternion.Lerp(pivot_Pan.rotation,aim_Pan.rotation,Time.deltaTime*turnSpeed);
		pivot_Tilt.rotation = Quaternion.Lerp(pivot_Tilt.rotation,aim_Tilt.rotation,Time.deltaTime*turnSpeed);
		
		if(Time.time>=nextFireTime){
			FireProjectile();
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
