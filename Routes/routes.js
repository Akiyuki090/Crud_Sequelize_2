const express = require("express");
const Car = require("../Models/cars");
const router = express.Router();
const DTO = require('../DTO/CarsDTO')

router.post("/", async (req, res) => {
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const tipo = req.body.tipo;
  let newsletter = req.body.newsletter;

  await Car.create({ marca, modelo, tipo, newsletter });
  res.redirect("/");
});

router.get("/", async (req, res) => {
  const Cars = await DTO.listar();
  return res.json(Cars);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await DTO.pegarporid(id)

  await Car.destroy({ where: { id: id } });
  res.status(200)
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const tipo = req.body.tipo;
  let newsletter = req.body.newsletter;

  const carData = {
    id,
    marca,
    modelo,
    tipo,
    newsletter,
  };

  await Car.update(carData, { where: { id: id } });
  res.redirect("/");
});

module.exports = router;
