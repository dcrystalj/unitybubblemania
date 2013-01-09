#pragma strict
var mySpeed:float=10;
var myRange:float=10;

private var myDist:float;

function Update () {
	//Izstrelek premaknemo v smeri naprej za hitrost v odvisnosti od časa
	transform.Translate(Vector3.forward*Time.deltaTime*mySpeed);
	//Izračunamo prepotovano razdaljo
	myDist += Time.deltaTime * mySpeed;
	//Če je daljša objekt uničimo
	if(myDist>=myRange)
		Destroy(gameObject);
}