using UnityEngine;
using System.Collections;

public class bubbleMove : MonoBehaviour {
	public bool UpdatePosition;
	public int timeOnPath=20;
    public float DelayUpdatePos;
    public float FirstYPos;
    public float MovementSpeed;
	void Start () {
       UpdatePosition = true;
       DelayUpdatePos = 1;
       FirstYPos = 5;
       MovementSpeed = 5;

      //Here i'm telling to the owner of this script to wall by the path created with the name "EnemyPath1" 
		iTween.MoveTo(this.gameObject,iTween.Hash("path",iTweenPath.GetPath("bubblesPath"),"time",timeOnPath));
    }
	
	 void Update () {

    }
}
