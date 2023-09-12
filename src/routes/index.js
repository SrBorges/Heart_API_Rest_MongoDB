import express from 'express';
import medicos from './medicoRoutes.js';
import pacientes from './pacienteRoutes.js'


const router = (app) => {

    app.route('/').get((req, res) => {

        res.status(200).send({text: "Verifique os EndPoints /medicos e /pacientes"})

    })

    app.use(
        express.json(),
        medicos,
        pacientes

    )

}

export default router