const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');

const service = new UserService();

router.get('/', async (req,res,next) =>{
    try{
    const { id } = req.query;
    const usuario = await service.findOneRandom(id);
    res.json({
        sucess: true,
        message: 'Usuario encontrado',
        data: usuario
    })
} catch(error){
    next(error);
}
})

router.patch('/', async (req,res,next) =>{
    try{
    const { id } = req.query;
    const body = req.body;
    console.log(id);
    const usuario = await service.update(id,body);
    res.json({
        sucess: true,
        message: 'Update',
        data: usuario
    })
} catch(error){
    next(error);
}
})




module.exports = router;