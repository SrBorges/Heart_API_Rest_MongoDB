import mongoose from "mongoose";

const pacienteSchema = mongoose.Schema({

    id: {type: String},
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    cpf: {type: String, required: true, unique: true},
    telefone: {type: String, required: true},
    cid: {type: String, required: true},
    cidade: {type: String},
    estado: {type: String}

})

const paciente = mongoose.model("pacientes", pacienteSchema)

export default paciente