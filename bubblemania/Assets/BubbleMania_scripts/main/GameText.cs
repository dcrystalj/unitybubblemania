using UnityEngine;
using System.Collections;

public class GameText : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnGUI(){
		GUI.color = Color.red;
		GUI.Label(new Rect(10,10,250,250),"level: "+GameC.lvl);
		GUI.Label(new Rect(10,30,250,250),"lives: "+GameC.lives);
		GUI.Label(new Rect(10,50,250,250),"money: "+GameC.money);
		GUI.Label(new Rect(10,70,250,250),"popped baloons: "+GameC.popped);
	}
}
