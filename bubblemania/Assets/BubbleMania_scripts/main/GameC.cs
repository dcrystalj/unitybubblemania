using UnityEngine;
using System.Collections;

public class GameC : MonoBehaviour {
	public static int money;
	public static int lvl;
	public static int lives;
	public static int popped;


	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void reset(){
		money = 0;
		lvl = 1;
		lives = 30;
		popped = 0;
	}
}
