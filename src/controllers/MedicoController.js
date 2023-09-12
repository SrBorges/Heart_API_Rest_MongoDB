import medico from "../models/medicos.js";
import bcrypt from "bcrypt";


export default class MedicoController{

    static read = async (req, res) => {

        try{
            const medicoListar = await medico.find()
            res.status(200).json(medicoListar)
        }catch(err){
            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação..."})
        }

    }

    static create = async (req, res) => {


        try{

        const hashedCod = bcrypt.hashSync(req.body.codigoDeAcesso, 10)
        req.body.codigoDeAcesso = hashedCod


            const medicoCriar = medico(req.body)
            await medicoCriar.save()
            res.status(201).json(medicoCriar)
        }catch(err){
            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação... "})
        }

    }

    static update = async (req, res) => {

        const id = req.params.id

        try{
            const medicoAtualizar = await medico.findByIdAndUpdate(id, req.body, {new: true})

            if(medicoAtualizar){
                res.status(200).send({text: "Cadastro atualizado ", medicoAtualizar})
            }else{
                res.status(400).send({error: "Não foi possível atualizar o cadastro"})
            }

        }catch(err){

            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação..."})
            
        }

    }

    static delete = async (req, res) => {

        const id = req.params.id

        try{
            const medicoExcluir = await medico.findByIdAndDelete(id)

            if(medicoExcluir){
                res.status(204).send({text: "Cadastro excluído"})

            }else{
                res.status(400).send({error: "Não foi possível excluir o cadastro"})
            }
        }catch(err){
            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação..."})
        }

    }

}