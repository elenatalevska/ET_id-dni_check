function comprobarDNI() {
	
	var numeroDNI = document.getElementById("dniNumero").value;
	var letraDNI = document.getElementById("dniLetra").value.toUpperCase();

	
	if (numeroDNI < 0 || numeroDNI > 99999999) {
		document.getElementById("resultado").innerHTML = "El número de DNI proporcionado no es válido";
		return;
	}

	
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var resto = numeroDNI % 23;
	var letraCalculada = letras[resto];

	
	if (letraCalculada != letraDNI) {
		document.getElementById("resultado").innerHTML = "La letra indicada no es correcta";
		return;
	}

	
	document.getElementById("resultado").innerHTML = "El número y letra de DNI son correctos";
}
