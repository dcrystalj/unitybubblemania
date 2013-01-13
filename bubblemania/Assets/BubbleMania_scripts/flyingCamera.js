//-- "CameraFly.js" -- (from andrewnoske.com)
//--
//-- Add this simple script to your main camera to enable it to free fly in 3D using the mouse to rotate
//-- left/right/up/down and the w,s,a,d keys (or arrow keys) to move forward/back/strafe-left/right.
//-- The same code can be adapted to fly/control a plane too.
 
var moveSpeed = 40.0;					// speed at which object moves
var rotateSpeed = 10;				// speed at which object turns
 
function Update () {
 
	var moveZ = Input.GetAxis("Vertical")   * Time.deltaTime * moveSpeed;	// by default: [w]/[s] key for forward/back 
	var moveX = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;	// by default: [e]/[d] key for strafe right/left
	gameObject.transform.Translate( moveX, 0, moveZ );			// move the object by this amount in x and z (relative to direction facing)
 
 	//We rotate camera only when we hold down left mouse button
 	if(Input.GetMouseButton(0)){
 		Screen.showCursor = false;	//We hide mouse cursor
		var rotateAboutX = -Input.GetAxis("Mouse Y") * Time.deltaTime * rotateSpeed;		// mouse movement up/down
		var rotateAboutY = Input.GetAxis("Mouse X")  * Time.deltaTime * rotateSpeed;		// mouse movement right/left
		gameObject.transform.Rotate( rotateAboutX, rotateAboutY, 0 );				// rotate the object by this amount around the X and Y axes.
		gameObject.transform.rotation.z = 0;	// otherwise the camera will tilt.
	}							
}