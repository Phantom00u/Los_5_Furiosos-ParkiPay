const express = require('express');
const faker = require('faker');
const router = express.Router();
const UserService = require('../services/user.service');
const service = new UserService();

router.get('/', async (req, res) => {
    let username = req.body.username;
	let password = req.body.password;
	let sessionUser = "";
	let loggedin = false;
	var i;
	if (username && password) {
		/*dbo.collection("usuarios").find({}, {"usuario": { $eq: username }},function(err, result) {
			if (err) throw err;
			if (result.length > 0) {
                if(result.password == password){
                    req.session.loggedin = true;
                    req.session.username = username;
                }else
                    res.send('Contraseña incorrecta');
			} else
				res.send('Usuario no existe');		
			res.end();
		});*/
		if(username ==""){
			console.log("El campo de nombres está vacío.\n");
			i++;
		}else{
			let strLetras = /^[a-zA-Z\sñÁÉÍÓÚáéíóúàèìòùÀÈÌÒÙ]*$/;
			 for (let j = 0; j < username.length; j++){
				 let tolower = username.charAt(j).toLowerCase();
			   if(!strLetras.test(tolower)){
				   if(username.charAt(j) != " "){
					console.log("El campo de usuario solo puede contener letras.\n");
				   i++;
			   }
			   }
			}
			if(username.length > 30){
				console.log("El campo de usuario no puede tener más de 30 caracteres.\n");
				i++;
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
				i++;
			}
		}
		if(faker.random.alpha(10) == password && i == 0){
			const user = await service.find();
			loggedin = true;
			sessionUser= username;
		}else
			console.log('Contraseña incorrecta');
	} else {
		//res.send('Ingrese su usuario y contraseña por favor');
		//res.end();
		res.send('Si jala');
		console.log('Ingrese su usuario y contraseña por favor');
	}
  });

  module.exports = router;