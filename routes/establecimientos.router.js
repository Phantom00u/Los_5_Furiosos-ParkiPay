const express = require('express');
const router = express.Router();
const ProductService = require('../services/establecimientos.service');
const validatorHandler = require('../middlewares/validator.handler');
const service = new ProductService();
const {
  createEstablecimiento,
  updateEstablecimiento,
  getEstablecimientoID,
} = require('../dtos/establecimientos.dto');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const Establecimientos = await service.find(limit);
  res.json(Establecimientos);
});

//STATUS CODE

router.get(
  '/:id',
  validatorHandler(getEstablecimientoID, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Establecimiento = await service.findOne(id);
      res.json({
        success: true,
        message: 'Este es el establecimiento encontrado',
        data: Establecimiento,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createEstablecimiento, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newEstablecimiento = await service.create(body);
      res.json({
        success: true,
        message: 'Establecimiento creado correctamente',
        data: newEstablecimiento,
      });
    } catch (error) {
      next(error);
    }
  }
);

//MENSAJES DE ERROR
router.patch(
  '/:id',
  validatorHandler(getEstablecimientoID, 'params'),
  validatorHandler(updateEstablecimiento, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Establecimiento = await service.update(id, body);
      res.json({
        message: 'update',
        data: Establecimiento,
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
  validatorHandler(getEstablecimientoID, 'params'),
  validatorHandler(updateEstablecimiento, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Establecimiento = await service.updateComplete(id, body);
      res.json({
        message: 'update total',
        data: Establecimiento,
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
  validatorHandler(getEstablecimientoID, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'delete',
      id,
    });
  }
);

module.exports = router;
