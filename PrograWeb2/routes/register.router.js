const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const service = new UserService();
const validatorHandler = require('./../middlewares/validator.handler');
const {
	createUserDto,
  } = require('../dtos/user.dto');

function validarEmail(correo){
	var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   correo = correo.toLowerCase(); 
   var valido= expReg.test(correo);
	if(valido !==  true){
		return false;
	}
	return true;
}


router.put('/', validatorHandler(createUserDto, 'params'),async (req, res) => {
    let username = req.query.username;
	let name = req.query.name;
	let password = req.query.password;
    let email = req.query.email;
    let telephone = req.query.telephone;
    let paypal = req.query.paypal;
	var errorCount = 0;
    let userObj = {"usuario": username, "name": name, "contrasena": password, "correo":email, "telefono":telephone, "paypal": paypal }
	if (username && name && password && email && telephone && paypal) {
		/*dbo.collection("usuarios").insertOne(userObj,function(err, result) {
			if (err) throw err;
            res.end();
		});*/
		if(username ==""){
			console.log("El campo de usuario está vacío.\n");
			errorCount++;
		}else{
			let strLetras = /^[a-zA-Z\sñÁÉÍÓÚáéíóúàèìòùÀÈÌÒÙ]*$/;
			 for (let j = 0; j < username.length; j++){
				 let tolower = username.charAt(j).toLowerCase();
			   if(!strLetras.test(tolower)){
				   if(username.charAt(j) != " "){
					console.log("El campo de usuario solo puede contener letras.\n");
					errorCount++;
			   }
			   }
			}
			if(a.length > 30){
				console.log("El campo de usuario no puede tener más de 30 caracteres.\n");
				errorCount++;
			}
		}
		if(name ==""){
			console.log("El campo de nombre está vacío.\n");
			errorCount++;
		}else{
			let strLetras = /^[a-zA-Z\sñÁÉÍÓÚáéíóúàèìòùÀÈÌÒÙ]*$/;
			 for (let j = 0; j < name.length; j++){
				 let tolower = name.charAt(j).toLowerCase();
			   if(!strLetras.test(tolower)){
				   if(name.charAt(j) != " "){
					console.log("El campo de nombre solo puede contener letras.\n");
					errorCount++;
			   }
			   }
			}
			if(a.length > 30){
				console.log("El campo de usuario no puede tener más de 30 caracteres.\n");
				errorCount++;
			}
		}
		if(email != ""){
			var bool = validarEmail(email);
			if(bool == false){
				console.log("El correo ingresado es invalido.\n");
				errorCount++;
			} 
		 }
		 if(paypal != ""){
			var bool = validarEmail(paypal);
			if(bool == false){
				console.log("El paypal ingresado es invalido.\n");
				errorCount++;
			} 
		 }
		if(password != ""){
			let hasPunct = false;
			let hasNum = false;
			let hasUpper = false;
			let hasLower = false;
			let lengthAte = false;
			let punctuations = ",.;:!¡¿?";
			for(let i = 0; i < punctuations.length ;i++){
				for(let j = 0; j < password.length ; j++){
					if(password.charAt(j) === punctuations.charAt(i)){
						hasPunct = true;
					}
				}
			}
			for (let i = 0; i < password.length; i++){
			if (!isNaN(password.charAt(i) * 1)){
				hasNum = true;
				}else{
					if (password.charAt(i) == password.charAt(i).toUpperCase()) {
						hasUpper = true;
					} 
					if (password.charAt(i) == password.charAt(i).toLowerCase()){
						hasLower = true;
					}
				}
			}
		   
			if(password.length >=  8){
				lengthAte = true;
			}
			if(password.length >  25){
				console.log("La contraseña no puede medir más de 25 caracteres.\n");
			}
			if(!hasPunct || !hasNum || !hasUpper || !hasLower | !lengthAte){
				if(!hasPunct){
					console.log("La contraseña debe tener un signo de puntuación (,.;:!¡¿?)\n");
				}
				if(!hasNum){
					console.log("La contraseña debe tener un nímero.\n");
				}
				if(!hasUpper){
					console.log("La contraseña debe tener al menos una letra en mayúsculas.\n");
				}
				if(!hasLower){
					console.log("La contraseña debe tener al menos una letra en minúsculas.\n");
				}
				if(!lengthAte){
					console.log("La contraseña debe tener por lo menos 8 caracteres.\n");
				}
				errorCount++;
			}
		}
		if(telephone == ""){
			console.log("No se ha ingresado un telefono.\n");
			errorCount++;
		}else{
			switch(telephone.length){
				case 8:
				case 10:
				case 12:
					break;
				default:
					console.log("El telefono ingresado no tiene el largo correcto (8, 10 o 12 caracteres).\n");
					errorCount++;
					break;
			}
			for (let i = 0; i < telephone.length; i++){
				if (isNaN(telephone.charAt(i) * 1)){
					console.log("El telefono ingresado es invalido.\n");
					errorCount++;
					break;
				}
			}
		}
		if(errorCount > 0){
			res.send('Por favor revise bien los datos ingresados');
		}else{
			service.create(userObj);
			res.send('Si jala x2');
		}
	} else {
		/*res.send('Ingrese sus datos por favor');
		res.end();*/
		res.send('Si jala x2');
		console.log('Ingrese sus datos por favor');
	}
  });

  module.exports = router;