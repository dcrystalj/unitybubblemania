using UnityEngine;
using System.Collections;


public class move : MonoBehaviour {
	public Vector3 pointB;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		this.transform.Translate(transform.forward*0.5f);
	}
	
}
