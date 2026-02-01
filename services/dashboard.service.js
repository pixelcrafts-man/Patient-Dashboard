import pool from "../config/database.js";

// Dashboard Data
export const fetchDashboardData = async (patientId) => {
  try {
    const pending = await pool.query(
      `SELECT a.*, d.full_name, d.profile_photo, c.clinic_name
       FROM appointments a
       JOIN doctors d ON d.id = a.doctor_id
       JOIN clinics c ON c.id = a.clinic_id
       WHERE a.patient_id = $1
       AND a.status = 'booked'
       AND a.date >= CURRENT_DATE
       ORDER BY a.date ASC`,
      [patientId]
    );

    const oldVisits = await pool.query(
      `SELECT a.*, d.full_name, d.profile_photo, c.clinic_name
       FROM appointments a
       JOIN doctors d ON d.id = a.doctor_id
       JOIN clinics c ON c.id = a.clinic_id
       WHERE a.patient_id = $1
       AND a.status = 'completed'
       ORDER BY a.date DESC`,
      [patientId]
    );

    const clinics = await pool.query(`SELECT * FROM clinics`);

    return {
      pending: pending.rows,
      oldVisits: oldVisits.rows,
      clinics: clinics.rows,
    };

  } catch (err) {
    console.log("Dashboard service error:", err);
    return {};
  }
};

// Pending Visits
export const fetchPendingVisits = async (patientId) => {
  const result = await pool.query(
    `SELECT a.*, d.full_name, d.profile_photo, c.clinic_name
     FROM appointments a
     JOIN doctors d ON d.id = a.doctor_id
     JOIN clinics c ON c.id = a.clinic_id
     WHERE a.patient_id = $1
     AND a.status = 'booked'
     AND a.date >= CURRENT_DATE
     ORDER BY a.date ASC`,
    [patientId]
  );
  return result.rows;
};

// Old Visits
export const fetchOldVisits = async (patientId) => {
  const result = await pool.query(
    `SELECT a.*, d.full_name, d.profile_photo, c.clinic_name
     FROM appointments a
     JOIN doctors d ON d.id = a.doctor_id
     JOIN clinics c ON c.id = a.clinic_id
     WHERE a.patient_id = $1
     AND a.status = 'completed'
     ORDER BY a.date DESC`,
    [patientId]
  );
  return result.rows;
};

// ⭐⭐⭐ My Doctors (This is the missing one)
export const fetchMyDoctors = async (patientId) => {
  const result = await pool.query(
    `SELECT DISTINCT d.*
     FROM appointments a
     JOIN doctors d ON d.id = a.doctor_id
     WHERE a.patient_id = $1`,
    [patientId]
  );
  return result.rows;
};


