const express = require('express');
const faker = require('faker');
const router = express.Router();
const ResService = require('../services/reservacion.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new ResService();

const {
	createReservationDto,
  updateReservationDto,
  getReservationId,
  } = require('../dtos/reservar.dto');

  router.get('/', async (req, res) => {
    const { size } = req.query;
    const limit = size || 10;
    const rolesUsuario = await service.find(limit);
    res.json(rolesUsuario);
  });
  
  //STATUS CODE
  
  /*router.get(
    '/:id',
    validatorHandler(getReservationId, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const reservacion = await service.findOne(id);
        res.json({
          success: true,
          message: 'Esta es la reservacion encontrado',
          data: reservacion,
        });
      } catch (error) {
        next(error);
      }
    }
  );*/

  router.post(
    '/',
    validatorHandler(createReservationDto, 'body'),
    async (req, res, next) => {
      const body = req.body;
      try {
        const newreservacion = await service.mongoCreate(body);
        res.json({
          success: true,
          message: 'reservacion creada correctamente',
          data: newreservacion,
        });
      } catch (error) {
        next(error);
      }
    }
  );
  
  //MENSAJES DE ERROR
  router.patch(
    '/:id',
    validatorHandler(getReservationId, 'params'),
    validatorHandler(updateReservationDto, 'body'),
    async (req, res) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const reservacion = await service.mongoUpdate(id, body);
        res.json({
          message: 'se ha actualizado la reservacion',
          data: reservacion,
          id,
        });
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    }
  );
  
  router.put(
    '/:id',
    validatorHandler(getReservationId, 'params'),
    validatorHandler(updateReservationDto, 'body'),
    async (req, res) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const reservacion = await service.updateComplete(id, body);
        res.json({
          message: 'update total',
          data: reservacion,
          id,
        });
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    }
  );
  
  router.delete(
    '/:id',
    validatorHandler(getReservationId, 'params'),
    async (req, res) => {
      const { id } = req.params;
      const reservacion = await service.mongoDelete(id);
      res.json({
        message: 'delete',
        data: reservacion,
        id,
      });
    }
  );
  module.exports = router;