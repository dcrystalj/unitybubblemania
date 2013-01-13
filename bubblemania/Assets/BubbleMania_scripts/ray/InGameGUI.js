var placementPlanesRoot : Transform;
var hoverMat : Material;
var placementLayerMask : LayerMask;
private var originalMat: Material;
private var lastHitObj : GameObject;

var textur : Texture;
var buildPanelOpen : boolean = false;

var onColor: Color;
var offColor: Color;
var allStructures : GameObject[];
//var buildBtnGraphics : UISlicedSprite[];
private var structureIndex: int=0;

function start() {
	//structureIndex =0;
	//UpdateGUI();
};

function Update () {

	Debug.Log("update");
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
			Debug.Log("rayhit");
		}
		else{
			if(lastHitObj){
				Debug.Log("rayhit nOT");
				lastHitObj.renderer.material = originalMat;
				lastHitObj = null;
			}
			Debug.Log("nc cist nc");
		}

		if(Input.GetMouseButtonDown(0) && lastHitObj){
			Debug.Log("mouse down");
			if(lastHitObj.tag == "placement_open"){
				var newStructure : GameObject = Instantiate(allStructures[structureIndex],lastHitObj.transform.position,Quaternion.identity);
				newStructure.transform.localEulerAngles.y = (Random.range(0,360));
				lastHitObj.tag = "placement_taken";
			}
		}
	}
}

//function UpdateGUI() {
//	for(var theBtnGraphic:UISlicedSprite in buildBtnGraphics){
//		theBtnGraphic.color = offColor;
//	}
//	buildBtnGraphics[structureIndex].color = onColor;
//}
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

	GUI.color = Color.cyan;
	if(GUI.Button(Rect(5,Screen.height-80,80,80),"a")){
		structureIndex=0;
		ToggleBuildPanel();
	}
	GUI.color = Color.cyan;
	if(GUI.Button(Rect(95,Screen.height-80,80,80),"b")){
		structureIndex=1;
		ToggleBuildPanel();
	}
	GUI.color = Color.cyan;
//GUI.Button(Rect(185,Screen.height-80,80,80),btnTexture3);

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

