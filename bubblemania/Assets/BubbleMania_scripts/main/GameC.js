
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
			GameC.gameState=1;
		}
	}
	
	public static function reset(){
		bubblesInGame=0;
		gameState = 0;
		money = 0;
		lvl = 1;
		lives = 30;
		popped = 0;
		enemies = 10;
		spawnInterval = 1;

		//Instantiate (yourCreature, Vector3(95.32924,0,365), Quaternion.identity);  TODO: create spawn here
	}

	public static function nextLevel(){
		lvl++;
		lives++;
		enemies += 10;	
		spawnInterval *= 1.1;
	}
