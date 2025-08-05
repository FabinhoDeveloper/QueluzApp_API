import prisma from "../config/prisma.js";

export default class CarroServices {
    static async cadastrarStatusCarro(nome) {
        const statusExistente = await prisma.status_carro.findFirst({
            where: {
                status_carro: nome
            }
        });

        if (statusExistente) {
            const erro = new Error("Status já cadastrado.");
            erro.status = 400;
            throw erro;
        }

        const status = await prisma.status_carro.create({
            data: {
                status_carro: nome
            }
        });
        return status;
    }

    static async listarStatusCarros() {
        const status = await prisma.status_carro.findMany();
        return status;
    }

    static async cadastrarTipoCarro(nome) {
        const tipoExistente = await prisma.tipo_carro.findFirst({
            where: {
                nome
            }
        });

        if (tipoExistente) {
            const erro = new Error("Tipo já cadastrado.");
            erro.status = 400;
            throw erro;
        }

        const tipo = await prisma.tipo_carro.create({
            data: {
                nome
            }
        });
        return tipo;
    }

    static async listarTiposCarros() {
        const tipos = await prisma.tipo_carro.findMany();
        return tipos;
    }

    static async listarCarros() {
        const carros = await prisma.carro.findMany({
            include: {
                status_carro: {
                    select: {
                        status_carro: true
                    }
                },
                tipo_carro: {
                    select: {
                        nome: true
                    }
                }
            }
        })
        return carros
    }

    static async cadastrarCarro(idTipoCarro, idStatus, modelo, capacidade, placa, fabricante) {
        const carroExistente = await prisma.carro.findFirst({
            where: {
                placa
            }
        });

        if (carroExistente) {
            const erro = new Error("Carro já cadastrado com esta placa.");
            erro.status = 400;
            throw erro;
        }
        
        const carro = await prisma.carro.create({
            data: {
                tipo_carro_id_tipo_carro: idTipoCarro,
                status_carro_id_status_carro: idStatus,
                modelo,
                placa,
                capacidade,
                fabricante,
            }
        })
        return carro
    }

    static async excluirCarro(id_carro) {
        const carro = await prisma.carro.findUnique({
            where: {
                id_carro
            }
        })

        if (!carro) {
            const erro = new Error("Carro não encontrado.")
            erro.status = 404
            throw erro
        }

        await prisma.carro.delete({
            where: {
                id_carro
            }
        })

        return carro
    }

    static async alterarCarro(id_carro, modelo, placa, capacidade) {
        const carro = await prisma.carro.update({
            where: {
                id_carro
            },
            data: {
                modelo,
                placa,
                capacidade
            }
        })

        return carro
    }
}
