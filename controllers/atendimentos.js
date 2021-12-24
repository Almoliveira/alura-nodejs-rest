const { json } = require("body-parser");
const Atendimento = require("../models/atendimento");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params);
    console.log(id);
    Atendimento.buscarPorId(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento)
      .then((atendimentoCadastrado) => {
        return res.status(201).json(atendimentoCadastrado);
      })
      .catch((erros) => res.status(400).json(erros));
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.alterar(id, valores, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimento.remover(id, res);
  });
};
