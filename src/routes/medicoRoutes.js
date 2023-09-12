import MedicoController from "../controllers/MedicoController.js";
import AuthController from "../controllers/authController.js";
import express from 'express';

const router = express.Router()

router
.get('/medicos', AuthController.verificarToken, MedicoController.read)
.post('/medicos', MedicoController.create)
.put('/medicos/:id', AuthController.verificarToken, MedicoController.update)
.delete('/medicos/:id', AuthController.verificarToken, MedicoController.delete)
.post('/login', AuthController.login)


export default router