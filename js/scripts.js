
var radios = document.getElementsByName('choix');
var input1 = document.getElementById('cesar_key');
var input2 = document.getElementById('vinger_key');
function isUpper(leter) {
	if (64 < leter.charCodeAt(0) && leter.charCodeAt(0) < 92)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function isLower(leter) {
	if (96 < leter.charCodeAt(0) && leter.charCodeAt(0) < 123)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function crypter_cesar(msg, clef) {
	function normal(nbr, clef) {
		return (nbr % 26 + clef % 26) % 26;
	}

	var new_msg='';

	for (var i=0;i < msg.length;i++)
	{
		var nb,nc,le;
		if (isUpper(msg.charAt(i)) && msg.charAt(i) != " ")
		{
			nb = msg.charCodeAt(i) - 65;
			nc = normal(nb, clef);
			le = String.fromCharCode(nc + 65);} 
		else
		{
			if (isLower(msg.charAt(i)) && msg.charAt(i) != " ")
			{
				nb = msg.charCodeAt(i) - 97;
				nc = normal(nb, clef);
				le = String.fromCharCode(nc + 97);
			}
			else
			{
				le = msg.charAt(i);}
		}		
		new_msg += le;
	}
	return new_msg;
}


var crypter=document.getElementById('encrypt');
var entrer=document.getElementById('msg');
var box = document.getElementById("decrypter");

box.addEventListener('click',function(){
if (box.checked){
	crypter.value="Decrypter";
}
else{
	crypter.value="Crypter";
}
},false);

radios[0].addEventListener('click', function() {
							   input1.disabled = false;
							   input2.disabled = true;
							   entrer.disabled = false;
							   crypter.disabled = false;}, false);

radios[1].addEventListener('click', function() {
							   input1.disabled = true;
							   input2.disabled = false;
						   }, false);


function coder() {
	var msg=entrer.value;
	var clef=document.getElementById('cesar_key').value;
	var msg_crypter=document.getElementById('sortie');
	if (box.checked){
		clef=-clef;
	}
	msg_crypter.innerHTML = crypter_cesar(msg, clef % 26) + '<br>' ;

//	var txt=' ';
//	for (var i=0; i <= 255;i++)
//	{
//		txt = txt + i + "--> " + String.fromCharCode(i) + '  <br>';
//	}
//	msg_crypter.innerHTML += txt;
}
	
