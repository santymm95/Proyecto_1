const btn= document.querySelector('#swich');

btn.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btn.classList.toggle('active')

 

    // Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
    }


} );

// Obtenemos el modo actual

if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

function login(){
	var user, password

	user = document.getElementById("usuario").value;
	password = document.getElementById("contrasena").value;
	msg = document.querySelector("span")

	if (user == "santy1553" && password =="Santy1020") {
		window.location="./principal.html";
	} else {
		 
		msg.innerText= "Usuario o contraseña incorrecta"
		 
	}

}


 