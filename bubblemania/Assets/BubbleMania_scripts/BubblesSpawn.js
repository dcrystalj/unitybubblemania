var enemies : int = 17; //I set 17 because i like 17
var yourCreature : GameObject;  //this must be public to set your creature prefab (in the editor)
var spawnInterval : float;

 
function Start(){
	for (var i= 0; i < enemies; i++){ //Create a creature (as many to reach totalCreatures)
        Instantiate (yourCreature, Vector3(95.32924,0,365), Quaternion.identity); 
    	yield WaitForSeconds(spawnInterval);
    }
}
