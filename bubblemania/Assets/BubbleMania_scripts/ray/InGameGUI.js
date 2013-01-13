var placementPlanesRoot : Transform;
var hoverMat : Material;
var placementLayerMask : LayerMask;
private var originalMat: Material;
private var lastHitObj : GameObject;

var btnTextur1 : Texture;
var btnTextur2 : Texture;
var btnTextur1off : Texture;
var btnTextur2off : Texture;

var buildPanelOpen : boolean = false;

var onColor: Color;
var offColor: Color;
var allStructures : GameObject[];
//var buildBtnGraphics : UISlicedSprite[];
private var structureIndex: int=0;

function Start() {
	structureIndex =0;
	//UpdateGUI();
};

function FixedUpdate() {
	if(buildPanelOpen){
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		if(Physics.Raycast(ray,hit,1000,placementLayerMask)){
			if (lastHitObj) {
				lastHitObj.renderer.material = originalMat;
			}
			lastHitObj = hit.collider.gameObject;
			originalMat = lastHitObj.renderer.material;
			lastHitObj.renderer.material = hoverMat;
		}
		else{
			if(lastHitObj){
				lastHitObj.renderer.material = originalMat;
				lastHitObj = null;
			}
		}

		if(Input.GetMouseButtonDown(0) && lastHitObj){
			if(lastHitObj.tag == "placement_open"){
				var newStructure : GameObject = Instantiate(allStructures[structureIndex],lastHitObj.transform.position,Quaternion.identity);
				newStructure.transform.localEulerAngles.y = Random.Range(0,359);
				lastHitObj.tag = "placement_taken";

				//minus money
				if(structureIndex==0){
					GameC.money-=500;
				}
				else if(structureIndex==1){
					GameC.money-=1500;
				}
			}
		}
	}



}

function SetBuildChoice (btnObj: GameObject) {
	var btnName : String = btnObj.name;

	if (btnName=="Btn_Cannon") {
		structureIndex = 0;
	}
	else if(btnName=="Btn_Missile"){
		structureIndex = 1;
	} 
	//UpdateGUI();
}

function OnGUI () {
	//tower 1
	if(GameC.gameState==2){
		if(GameC.money<500){
			GUI.enabled=false;
			GUI.color = Color.yellow;
			GUI.Button(Rect(5,Screen.height-120,120,120),btnTextur1off);
		}
		else{
			GUI.enabled=true;
			
			GUI.color = Color.cyan;
			if(GUI.Button(Rect(5,Screen.height-120,120,120),btnTextur1)){
				structureIndex=0;
				if(!buildPanelOpen){
					ToggleBuildPanel();
				}
			}
		}

		//tower 2
		if(GameC.money<1500){
			GUI.enabled=false;
			GUI.color = Color.yellow;
			GUI.Button(Rect(135,Screen.height-120,120,120),btnTextur2off);
		}
		else{
			GUI.enabled=true;
			

			GUI.color = Color.cyan;
			if(GUI.Button(Rect(135,Screen.height-120,120,120),btnTextur2)){
				structureIndex=1;
				if(!buildPanelOpen){
					ToggleBuildPanel();
				}
			}
		}


		GUI.enabled=true;
		GUI.color = Color.red;
		if(GameC.gameState == 2){ 
			if(GUI.Button( Rect(Screen.width/2-50,Screen.height-50,100,50),"finish")){
				GameC.gameState=1;
				if(buildPanelOpen){
					ToggleBuildPanel();
				}
			}
		}
	}

}

function ToggleBuildPanel () {
	if(buildPanelOpen){
		for(var thePlane: Transform in placementPlanesRoot){
			thePlane.gameObject.renderer.enabled = false;
		}

		buildPanelOpen = false;
	}
	else{
		for(var thePlane: Transform in placementPlanesRoot){
			thePlane.gameObject.renderer.enabled = true;
		}

		buildPanelOpen = true;
	}	

}

