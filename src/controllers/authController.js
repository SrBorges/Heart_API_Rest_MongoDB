import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import medico from "../models/medicos.js"

const SECRET = process.env.SECRET;

export default class AuthController {
  static async login(req, res) {
    try {
      const foundMedico = await medico.findOne({ nome: req.body.nome });

      if (!foundMedico) {
        return res.status(401).send({
          text: "Médico não encontrado",
          data: {
            nome: req.body.nome,
          },
        });
      }

      const validacaoCod = bcrypt.compareSync(req.body.codigoDeAcesso, foundMedico.codigoDeAcesso);

      if (!validacaoCod) {
        return res.status(401).send({
          text: "Não autorizado",
        });
      }

      const token = jwt.sign({ nome: foundMedico.nome }, SECRET);

      res.status(200).send({
        text: "Login realizado com sucesso.",
        data: {
          token
        },
      });
    } catch (err) {
      console.error("Error", err);
      res.status(500).send({ error: "Erro na aplicação." });
    }

  }

  static verificarToken = async (req, res, next) => {

    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send({ text: "Não autorizado" });
  }

  try {
      await jwt.verify(token, SECRET);
      next();
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Token não válido" });
  }
}

}