import PacienteController from "../controllers/PacienteController.js";
import AuthController from "../controllers/authController.js";
import express from 'express';

const router = express.Router()


router
.get('/pacientes', AuthController.verificarToken, PacienteController.read)
.post('/pacientes', AuthController.verificarToken, PacienteController.create)
.put('/pacientes/:id', AuthController.verificarToken, PacienteController.update)
.delete('/pacientes/:id', AuthController.verificarToken, PacienteController.delete)


export default router