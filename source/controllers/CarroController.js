import CarroServices from "../services/CarroServices";

export default class CarroController {
    static async cadastrarCarro(req, res) {
        const { placa, modelo, ano, cor } = req.body;
        
        try {
            const carro = await CarroServices.cadastrarCarro(placa, modelo, ano, cor);
            res.status(201).json({ mensagem: 'Carro cadastrado com sucesso!', carro });
        }  catch (error) {
            console.error(`Erro ao cadastrar carro: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar carro: ${error.message}` });
        }
    }

    static async listarCarros(req, res) {
    }

    static async excluirCarro(req, res) {}
}
