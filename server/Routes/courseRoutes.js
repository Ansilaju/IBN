import express from "express";
import {
  registerLaunchpad,
  getAllLaunchpad,
  deleteLaunchpad,
} from "../Controllers/launchpadController.js";

import {
  registerAdvancedmastery,
  getAllAdvancedmastery,
  deleteAdvancedmastery,
} from "../Controllers/advancedmasteryController.js";

import {
  deletebasic,
  getAllbasic,
  registerbasic,
} from "../Controllers/basicController.js";

import {
  registerIcsp,
  getAllIcsp,
  deleteIcsp,
} from "../Controllers/icspController.js";

import {
  registerZerotohero,
  getAllZerotohero,
  deleteZerotohero,
} from "../Controllers/zerotoheroController.js";

import {
  registerBeginner,
  getAllBeginner,
  deleteBeginner,
} from "../Controllers/beginnerController.js";

import {
  registerIntermediate,
  getAllIntermediate,
  deleteIntermediate,
} from "../Controllers/intermediateController.js";

import {
  registerAdvancedvfx,
  getAllAdvancedvfx,
  deleteAdvancedvfx,
} from "../Controllers/advancedvfxController.js";

import {
  registerProfessional,
  getAllProfessional,
  deleteProfessional,
} from "../Controllers/professionalController.js";

import {
  registerFrontend,
  getAllFrontend,
  deleteFrontend,
} from "../Controllers/frontendController.js";

import {
  registerBackend,
  getAllBackend,
  deleteBackend,
} from "../Controllers/backendController.js";

import {
  registerFullstack,
  getAllFullstack,
  deleteFullstack,
} from "../Controllers/fullstackController.js";

const router = express.Router();

// Routes
router.post("/launchpad/register", registerLaunchpad);
router.get("/launchpad/all", getAllLaunchpad);
router.delete("/launchpad/:id", deleteLaunchpad);

router.post("/advancedmastery/register", registerAdvancedmastery);
router.get("/advancedmastery/all", getAllAdvancedmastery);
router.delete("/advancedmastery/:id", deleteAdvancedmastery);

router.post("/basic/register", registerbasic);
router.get("/basic/all", getAllbasic);
router.delete("/basic/:id", deletebasic);

router.post("/Icsp/register", registerIcsp);
router.get("/Icsp/all", getAllIcsp);
router.delete("/Icsp/:id", deleteIcsp);

router.post("/Zerotohero/register", registerZerotohero);
router.get("/Zerotohero/all", getAllZerotohero);
router.delete("/Zerotohero/:id", deleteZerotohero);

router.post("/Beginner/register", registerBeginner);
router.get("/Beginner/all", getAllBeginner);
router.delete("/Beginner/:id", deleteBeginner);

router.post("/Intermediate/register", registerIntermediate);
router.get("/Intermediate/all", getAllIntermediate);
router.delete("/Intermediate/:id", deleteIntermediate);

router.post("/Advancedvfx/register", registerAdvancedvfx);
router.get("/Advancedvfx/all", getAllAdvancedvfx);
router.delete("/Advancedvfx/:id", deleteAdvancedvfx);

router.post("/Professional/register", registerProfessional);
router.get("/Professional/all", getAllProfessional);
router.delete("/Professional/:id", deleteProfessional);

router.post("/Frontend/register", registerFrontend);
router.get("/Frontend/all", getAllFrontend);
router.delete("/Frontend/:id", deleteFrontend);

router.post("/Backend/register", registerBackend);
router.get("/Backend/all", getAllBackend);
router.delete("/Backend/:id", deleteBackend);

router.post("/Fullstack/register", registerFullstack);
router.get("/Fullstack/all", getAllFullstack);
router.delete("/Fullstack/:id", deleteFullstack);

export default router;
