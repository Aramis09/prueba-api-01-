const { Router } = require("express");

const controllerGetServices =  require("../controller/services/getServices/getServicesController");
const controllerGetSlots =  require("../controller/slots/getSlotsController/getSlotsController");

const router = Router();

router.get("/services",controllerGetServices);
router.get("/slots",controllerGetSlots);


module.exports =  router;
