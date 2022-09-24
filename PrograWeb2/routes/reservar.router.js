const express = require('express');
const faker = require('faker');
const router = express.Router();
const EstService = require('../services/establecimientos.service');
const service = new EstService();

router.put('/', async (req, res) => {
    let isActive = req.query.isActive;
	let id = req.query.id;
	let name = req.query.name;
	let parkinglot = req.query.parkinglot;
    let address = req.query.adress;
    let image = req.query.image;
    let i = 0;
    if(!isActive){
        res.send("Este establecimiento no está activo.")
        return;
    }
    if(isActive && id && name && parkinglot && address && image){
        if(name != ""){
			let strLetras = /^[a-zA-Z\sñÁÉÍÓÚáéíóúàèìòùÀÈÌÒÙ]*$/;
			 for (let j = 0; j < name.length; j++){
				 let tolower = name.charAt(j).toLowerCase();
			   if(!strLetras.test(tolower)){
				   if(name.charAt(j) != " "){
					console.log("El campo de nombre solo puede contener letras.\n");
				   i++;
			   }
			   }
			}
			if(username.length > 50){
				console.log("El campo de nombre no puede tener más de 50 caracteres.\n");
				i++;
			}
		}
        if(parkinglot != ""){
			for (let i = 0; i < parkinglot.length; i++){
				if (isNaN(parkinglot.charAt(i) * 1)){
					console.log("El numero de estacionamientos ingresado es invalido.\n");
					i++;
					break;
				}
			}
		}
        if(i > 0){
            return;
        }
        service.generate(1);
        res.send(service.Establecimientos[0]);
    }else{
        res.send("Ingrese todos sus datos por favor.");
    }
  });

  module.exports = router;