import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient()

export default class UsuarioServices {
    static async criarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, endereco) {

    }

    static async editarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, endereco) {

    }

    static async excluirUsuario() {
       
    }
}
