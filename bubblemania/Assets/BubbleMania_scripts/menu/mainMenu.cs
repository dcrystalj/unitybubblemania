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
		if(GUI.Button(new Rect(Screen.width/2-50,Screen.height/2-50,100,50),"Start Game")){
			Application.LoadLevel("unity");
		}
		if(GUI.Button(new Rect(Screen.width/2-50,Screen.height/2,100,50),"Quit")){
			Application.Quit();
		}
		GUI.color = Color.green;
		GUI.Label(new Rect(Screen.width-100,Screen.height-60,280,280),"CopyRights to:");
		GUI.color = Color.red;
		GUI.Label(new Rect(Screen.width-100,Screen.height-40,250,250),"Gasper Urh");
		GUI.Label(new Rect(Screen.width-100,Screen.height-20,270,270),"Tomaz Tomazic");
	}

}
