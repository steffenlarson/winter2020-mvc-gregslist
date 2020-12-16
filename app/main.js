import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HouseController.js";
import JobsController from "./Controllers/JobController.js";

class App {
  //valuesController = new ValuesController();
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()
}

window["app"] = new App();
