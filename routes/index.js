const Router = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", async (req, res) => {
	res.send("Home route.");
});

router.post("/countries", controllers.createNewCountry);
router.get("/countries", controllers.getAllCountries);
router.get("/country/:id", controllers.getCountryByID);
router.delete("/country/:id", controllers.deleteCountryByID);
router.patch("/country/:id", controllers.updateCountryByID);

router.get("/country-airlines/:id", controllers.getCountryAirlines);

router.post("/airlines", controllers.createNewAirline);
router.get("/airlines/:id", controllers.getAllAirlines);

router.get("/airline/:id", controllers.getAirlineByID);
router.delete("/airline/:id", controllers.deleteAirLineByID);
router.patch("/airline/:id", controllers.updateAirLineByID);

module.exports = router;
