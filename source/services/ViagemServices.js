import prisma from "../config/prisma.js";

export default class ViagemServices {
    static async solicitarViagem() {} // Usuário solicita um transporte sanitário
    
    static async cadastrarViagem() {}

    static async atualizarViagem() {}

    static async listarViagemPorId(idViagem) {}

    static async listarViagens() {}

    static async listarViagensPorUsuario(idUsuario) {}

    static async excluirViagem() {}
}
