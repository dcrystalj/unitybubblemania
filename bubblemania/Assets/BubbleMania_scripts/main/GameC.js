
	public static var spawn : GameObject;
	public var cameras : Camera[];
	


	public static var money : int;
	public static var lvl : int;
	public static var lives  : int;
	public static var popped : int;
	public static var enemies: int;
	public static var spawnInterval: float;
	public static var bubblesInGame: int; //how many bubbles have not been destroyed
	public static var areAllCreated : boolean;

	public static var gameState : int; //0=play, 1=lvl done, 2=buy towers, 3=gameOver


	// Use this for initialization
	function Start () { 
		reset();	
		//GameC.gameState=1;
	}
	
	
	// Update is called once per frame
	//check when all bubbles are created and destroyed

	function Update () {
		if(areAllCreated && bubblesInGame==0){
			areAllCreated = false;
			GameC.gameState=1;
			spawn=null;
		}

		if (gameState == 2){
			setActiveCamera(1);
		}
		else if (gameState == 0){
			setActiveCamera(0);
		}
	}
	
	public static function reset(){
		bubblesInGame=0;
		gameState = 0;
		money = 0;
		lvl = 1;
		lives = 30;
		popped = 0;
		enemies = 5;
		spawnInterval = 1;
		spawn = GameObject.Instantiate( Resources.LoadAssetAtPath("Assets/BubbleMania_Objects/Spawn.prefab", typeof(GameObject)) ) as GameObject;


	}

	public static function nextLevel(){
		lvl++;
		lives++;
		enemies += 10;	
		spawnInterval /= 1.5;
		spawn = GameObject.Instantiate( Resources.LoadAssetAtPath("Assets/BubbleMania_Objects/Spawn.prefab", typeof(GameObject)) ) as GameObject;
	}

	public function setActiveCamera(i){
		for(var c:Camera in cameras){
			c.camera.active=false;
		}
		cameras[i].camera.active=true;
	}