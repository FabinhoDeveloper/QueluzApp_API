import prisma from "../config/prisma";

export default class CarroServices {
    static async listarCarros() {
        const carros = await prisma.carro.findMany()
        return carros
    }

    static async cadastrarCarro(marca, modelo, ano) {
        const carro = await prisma.carro.create({
            data: {
                marca,
                modelo,
                ano
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
}
