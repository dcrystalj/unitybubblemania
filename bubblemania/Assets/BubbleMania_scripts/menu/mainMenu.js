	// Use this for initialization
	function Start () {
	}
	
	// Update is called once per frame
	function Update () {

	}
	function OnGUI(){
		if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2-50,100,50),"Start Game")){
			Application.LoadLevel("unity");
		}
		if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2,100,50),"Quit")){
			Application.Quit();
		}
		GUI.color = Color.green;
		GUI.Label( Rect(Screen.width-100,Screen.height-60,280,280),"CopyRights to:");
		GUI.color = Color.white;
		GUI.Label( Rect(Screen.width-100,Screen.height-40,250,250),"Gasper Urh");
		GUI.Label( Rect(Screen.width-100,Screen.height-20,270,270),"Tomaz Tomazic");
	}