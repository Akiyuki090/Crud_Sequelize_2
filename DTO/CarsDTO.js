const model = require("../Models/cars");
module.exports = {
  listar() {
    return model.findAll({ raw: true });
  },
  async pegarporid(id) {
    const encontrado = await model.findOne({
      where: { id: id },
    });
    if (!encontrado) {
      throw new NotFound("Carro");
    }
    return encontrado;
  },
};
