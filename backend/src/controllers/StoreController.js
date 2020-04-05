const connection = require("../database/connection");

module.exports = {
  async index(resquest, response) {
    const [count] = await connection("stores").count();

    const stores = await connection("stores").select("*");

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(stores);
  },

  async create(request, response) {
    const { name, whatsapp, category } = request.body;

    await connection("stores").insert({
      name,
      whatsapp,
      category
    });

    return response.json({ name });
  },

  async put(resquest, response) {
    const { id } = resquest.params;

    await connection("stores")
      .where("id", id)
      .update(resquest.body, ["id", "name", "whatsapp", "category"]);
    return response.status(204).send();
  },

  async delete(resquest, response) {
    const { id } = resquest.params;
    await connection("stores")
      .where("id", id)
      .delete();
    return response.status(204).send();
  }
};
