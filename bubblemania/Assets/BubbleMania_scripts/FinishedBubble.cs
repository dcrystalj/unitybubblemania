using UnityEngine;
using System.Collections;

public class FinishedBubble : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollisionExit(Collision trk){
		Debug.Log ("hit");
		if(trk.gameObject.tag=="bubble")
			Destroy(trk.gameObject);
		if(this.gameObject.tag=="projectile")
			Destroy(this.gameObject);
	}
}


