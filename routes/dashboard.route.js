import express from "express";
import {
  getDashboardData,
  getPendingVisits,
  getOldVisits,
  getMyDoctors
} from "../controllers/dashboard.controller.js";

const router = express.Router();

// 4 Patient Dashboard APIs
router.get("/dashboard/:patientId", getDashboardData);
router.get("/pending-visits/:patientId", getPendingVisits);
router.get("/old-visits/:patientId", getOldVisits);
router.get("/my-doctors/:patientId", getMyDoctors);

export default router;

