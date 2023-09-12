import paciente from "../models/pacientes.js";


export default class PacienteController{

    static read = async (req, res) => {

        try{
        const pacienteListar = await paciente.find()
        res.status(200).json(pacienteListar)

        }catch(err){

            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação... "})

        }


    }

    static create = async (req, res) => {

        try{
        const pacienteCriar = paciente(req.body)
        await pacienteCriar.save()
        res.status(201).json(pacienteCriar)

        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação... "})

        }


    }


    static update = async (req, res) => {

        const id = req.params.id

        try{

            const pacienteAtualizar = await paciente.findByIdAndUpdate(id, req.body, {new: true})

            if(pacienteAtualizar){

                res.status(200).send({text: "Cadastro atualziado ", pacienteAtualizar})

            }else{
                res.status(400).send({error: "Não foi possível atualizar o cadastro "})
            }

        }catch(err){
            console.error("error", err)
            res.status(500).send({text: "Erro na aplicação "})
        }

    }

    static delete = async (req, res) => {

        const id = req.params.id

        try{
            const pacienteExcluir = await paciente.findByIdAndDelete(id)

            if(pacienteExcluir){
                res.status(204).send({text: "Cadastro excluído com sucesso "})
            }else{

                res.status(400).send({error: "Não foi possível excluir o cadastro "})

            }


        }catch(err){
            console.error("error", err)
            res.status(500).send({error: "Erro na aplicação... "})
        }

    }

}