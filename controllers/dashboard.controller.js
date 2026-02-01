import {
  fetchDashboardData,
  fetchPendingVisits,
  fetchOldVisits,
  fetchMyDoctors
} from "../services/dashboard.service.js";

export const getDashboardData = async (req, res) => {
  const { patientId } = req.params;
  const data = await fetchDashboardData(patientId);
  res.json({ success: true, data });
};

export const getPendingVisits = async (req, res) => {
  const { patientId } = req.params;
  const data = await fetchPendingVisits(patientId);
  res.json({ success: true, data });
};

export const getOldVisits = async (req, res) => {
  const { patientId } = req.params;
  const data = await fetchOldVisits(patientId);
  res.json({ success: true, data });
};

export const getMyDoctors = async (req, res) => {
  const { patientId } = req.params;
  const data = await fetchMyDoctors(patientId);
  res.json({ success: true, data });
};


