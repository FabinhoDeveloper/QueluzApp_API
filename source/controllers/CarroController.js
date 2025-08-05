import CarroServices from "../services/CarroServices.js";

export default class CarroController {
    static async cadastrarStatusCarro(req, res) {
        const { nome } = req.body;

        try {
            const status = await CarroServices.cadastrarStatusCarro(nome);
            res.status(201).json({ mensagem: 'Status cadastrado com sucesso!', status });
        } catch (error) {
            console.error(`Erro ao cadastrar status: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar status: ${error.message}` });
        }
    }

    static async listarStatusCarros(req, res) {
        try {
            const status = await CarroServices.listarStatusCarros();
            res.status(200).json(status);
        } catch (error) {
            console.error(`Erro ao listar status: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar status: ${error.message}` });
        }
    }

    static async cadastrarTipoCarro(req, res) {
        const { nome } = req.body;

        try {
            const tipo = await CarroServices.cadastrarTipoCarro(nome);
            res.status(201).json({ mensagem: 'Tipo cadastrado com sucesso!', tipo });
        } catch (error) {
            console.error(`Erro ao cadastrar tipo: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar tipo: ${error.message}` });
        }
    }

    static async listarTiposCarros(req, res) {
        try {
            const tipos = await CarroServices.listarTiposCarros();
            res.status(200).json(tipos);
        } catch (error) {
            console.error(`Erro ao listar tipos: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar tipos: ${error.message}` });
        }
    }

    static async listarCarros(req, res) {
        try {
            const carros = await CarroServices.listarCarros();
            res.status(200).json(carros);
        } catch (error) {
            console.error(`Erro ao listar carros: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar carros: ${error.message}` });
        }
    }

    static async cadastrarCarro(req, res) {
        const { idTipoCarro, idStatus, modelo, placa, capacidade, fabricante } = req.body;

        try {
            const carro = await CarroServices.cadastrarCarro(
                idTipoCarro,
                idStatus,
                modelo,
                capacidade, // agora correto
                placa,      // agora correto
                fabricante
            );
            res.status(201).json({ mensagem: 'Carro cadastrado com sucesso!', carro });
        } catch (error) {
            console.error(`Erro ao cadastrar carro: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar carro: ${error.message}` });
        }
    }

    static async excluirCarro(req, res) {
        const { id_carro } = req.params;

        try {
            await CarroServices.excluirCarro(Number(id_carro));
            res.status(200).json({ mensagem: 'Carro excluído com sucesso!' });
        } catch (error) {
            console.error(`Erro ao excluir carro: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao excluir carro: ${error.message}` });
        }
    }

    static async alterarCarro(req, res) {
        const { id_carro } = req.params;
        const { modelo, placa, capacidade } = req.body;

        try {
            const carro = await CarroServices.alterarCarro(Number(id_carro), modelo, placa, capacidade);
            res.status(200).json({ mensagem: 'Carro alterado com sucesso!', carro });
        } catch (error) {
            console.error(`Erro ao alterar carro: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao alterar carro: ${error.message}` });
        }
    }
}
