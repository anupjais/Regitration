let uname = document.getElementById("email");
let pass = document.getElementById("password");
let grad = document.getElementById("graduation");
let brnch = document.getElementById("branch")
let yop = document.getElementById("yop");
let add = document.getElementById("address")

function registerUser()
{
	console.log("Usernae : "+uname.value);
	console.log("Password : "+pass.value);
	alert(uname.value);
	alert(pass.value);

	/*let userData={
		// username:uname.value,
		// password:pass.value,
		// address:add.value,
		// hons:grad.value,
		// branch:brnch.value,
		// yop:yop.value

		console.log(uname.value),
		console.log(pass.value),
		console.log(add.value),
		console.log(grad.value),
		console.log(brnch.value),
		console.log(yop.value)
	}

	saveData(userData);*/
	// clearField();
}

// function clearField()
// {
// 	uname.value="";
// 	pass.value="";
// 	grad.value="";
// 	brnch.value="";
// 	yop.value="";
// 	add.value="";
// }

// registerUser();


// function saveData(userData){
// 	localStorage.setItem("userData",JSON.stringify(userData));
// }