	// Use this for initialization
	var style : GUIStyle;

	function Start () {
	}

	function OnGUI(){
		GUI.color = Color.red;
		GUI.Label(Rect(10,10,250,250),"Level: "+GameC.lvl);
		GUI.Label(Rect(10,30,250,250),"Lives: "+GameC.lives);
		GUI.Label(Rect(10,50,250,250),"Money: "+GameC.money);
		GUI.Label(Rect(10,70,250,250),"Popped baloons: "+GameC.popped);

		//develop vars
		GUI.Label(Rect(10,90,600,250),"enemies "+GameC.enemies +" spawnInterval "+GameC.spawnInterval+" bubblesInGame "+GameC.bubblesInGame+" areAllCreated "+GameC.areAllCreated+" gameState "+GameC.gameState);		

		//Show buy menu
		if (GameC.gameState == 1){

			style.fontSize =40;
			GUI.Label(Rect(Screen.width/2-100,Screen.height/5,500,500),"Level "+ GameC.lvl +" done",style);

			if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2-50,100,50),"Next level")){
				GameC.gameState=0;
				GameC.nextLevel();

			}
			if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2,100,50),"Buy towers")){
				GameC.gameState=2;
			}
		}
		//buy towers mode
		else if(GameC.gameState == 2){ 
			if(GUI.Button( Rect(Screen.width/2-50,Screen.height-50,100,50),"finish")){
				GameC.gameState=1;
			}
		}

		else if (GameC.gameState == 3){

			style.fontSize =40;
			GUI.Label(Rect(Screen.width/2-100,Screen.height/5,500,500),"Game Over",style);

			if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2-50,100,50),"Restart game")){
				GameC.reset();

			}
			if(GUI.Button( Rect(Screen.width/2-50,Screen.height/2,100,50),"Quit")){
				Application.Quit();
			}
		}

	}