const Atendimento = require('../models/atendimento')

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    return res.send(
      "Você está na rota de atendimentos e está realizando um GET"
    );
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento ,res);
  });
};
