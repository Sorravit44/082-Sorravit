window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	var cusername = document.forms["myLogin"]["username"];
	var cpassword = document.forms["myLogin"]["password"];

	if(username != cusername.value){
		alert("WrongUsername");
		return false;
	}
	else if(password != cpassword.value){
		alert("Unpass");
		return false;
	}
	else{alert("pass")}
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}