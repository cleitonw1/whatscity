const connection = require("../database/connection");

module.exports = {
  async index(resquest, response) {
    const promos = await connection("promos").select("*");
    return response.json(promos);
  },

  async create(request, response) {
    const { name, imgUrl, imgUrlSmall } = request.body;

    await connection("promos").insert({
      name,
      imgUrl,
      imgUrlSmall
    });

    return response.json({ name });
  },

  async put(resquest, response) {
    const { id } = resquest.params;

    await connection("promos")
      .where("id", id)
      .update(resquest.body, ["id", "name", "imgUrl", "imgUrlSmall"]);
    return response.status(204).send();
  },

  async delete(resquest, response) {
    const { id } = resquest.params;
    await connection("promos")
      .where("id", id)
      .delete();
    return response.status(204).send();
  }
};
