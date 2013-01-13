using UnityEngine;
using System.Collections;

public class bubbleMove : MonoBehaviour {
	public int hitrost=20;
	void Start () {

      //Vsak objekt, ki mu pripada ta skripta damo na iTween pot.
		iTween.MoveTo(this.gameObject,iTween.Hash("path",iTweenPath.GetPath("bubblesPath"),"speed",hitrost, "easetype", "linear"));
    }
	
	 void Update () {

    }
}
