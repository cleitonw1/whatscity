const express = require("express");

const StoreController = require("./controllers/StoreController");
const PromoController = require("./controllers/PromoController");

const routes = express.Router();

routes.get("/stores", StoreController.index);
routes.post("/stores", StoreController.create);
routes.put("/stores/:id", StoreController.put);
routes.delete("/stores/:id", StoreController.delete);

routes.get("/promos", PromoController.index);
routes.post("/promos", PromoController.create);
routes.put("/promos/:id", PromoController.put);
routes.delete("/promos/:id", PromoController.delete);

module.exports = routes;
