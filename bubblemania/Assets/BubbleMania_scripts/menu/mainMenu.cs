using UnityEngine;
using System.Collections;

public class mainMenu : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

	}
	void OnGUI(){
		if(GUI.Button(new Rect(0,0,200,100),"Start Game")){
			Application.LoadLevel("unity");
		}
	}

}
