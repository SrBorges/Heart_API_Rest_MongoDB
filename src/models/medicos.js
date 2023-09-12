import mongoose from "mongoose";

const medicoSchema = mongoose.Schema({

    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    crm: {type: String, unique: true},
    codigoDeAcesso: {type: String, required: true, unique: true},

})

const medico = mongoose.model("medicos", medicoSchema)

export default medico