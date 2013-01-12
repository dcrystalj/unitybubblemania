var enemies : int; //I set 17 because i like 17
var bubble : GameObject;  //this must be public to set your creature prefab (in the editor)
var spawnInterval : float;


function start(){
	GameC.areAllCreated = false;
	spawnInterval = GameC.spawnInterval;
	enemies = GameC.enemies;
}

function update(){
	
} 


function Start(){
	for (var i= 0; i < enemies; i++){ //Create a creature (as many to reach totalCreatures)
        Instantiate (bubble, Vector3(95.32924,0,365), Quaternion.identity); 
        GameC.bubblesInGame++;
    	yield WaitForSeconds(spawnInterval);
    }
    GameC.areAllCreated = true;

}
