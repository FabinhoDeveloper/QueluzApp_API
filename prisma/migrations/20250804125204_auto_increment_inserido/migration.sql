-- CreateTable
CREATE TABLE "public"."acompanhante" (
    "id_acompanhante" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "acompanhante_pkey" PRIMARY KEY ("id_acompanhante")
);

-- CreateTable
CREATE TABLE "public"."carro" (
    "id_carro" SERIAL NOT NULL,
    "tipo_carro_id_tipo_carro" INTEGER,
    "status_carro_id_status_carro" INTEGER,
    "modelo" VARCHAR(255),
    "placa" VARCHAR(25),
    "capacidade" INTEGER,

    CONSTRAINT "carro_pkey" PRIMARY KEY ("id_carro")
);

-- CreateTable
CREATE TABLE "public"."categoria_mensagem" (
    "id_categoria_mensagem" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,

    CONSTRAINT "categoria_mensagem_pkey" PRIMARY KEY ("id_categoria_mensagem")
);

-- CreateTable
CREATE TABLE "public"."funcao" (
    "id_funcao" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "funcao_pkey" PRIMARY KEY ("id_funcao")
);

-- CreateTable
CREATE TABLE "public"."funcionario" (
    "id_funcionario" SERIAL NOT NULL,
    "usuario_id_usuario" INTEGER,
    "matricula" INTEGER,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id_funcionario")
);

-- CreateTable
CREATE TABLE "public"."funcionario_funcao" (
    "funcionario_id_funcionario" INTEGER NOT NULL,
    "funcao_id_funcao" INTEGER NOT NULL,

    CONSTRAINT "funcionario_funcao_pkey" PRIMARY KEY ("funcionario_id_funcionario","funcao_id_funcao")
);

-- CreateTable
CREATE TABLE "public"."mensagem_ouvidoria" (
    "id_mensagem_ouvidoria" SERIAL NOT NULL,
    "status_mensagem_id_status_mensagem" INTEGER,
    "usuario_id_usuario" INTEGER,
    "categoria_mensagem_id_categoria_mensagem" INTEGER,
    "assunto" VARCHAR(255),
    "nome_solicitante" VARCHAR(255),
    "email_solicitante" VARCHAR(255),
    "numero_protocolo" CHAR(15),

    CONSTRAINT "mensagem_ouvidoria_pkey" PRIMARY KEY ("id_mensagem_ouvidoria")
);

-- CreateTable
CREATE TABLE "public"."parada" (
    "id_parada" SERIAL NOT NULL,
    "solicitante_viagem_id_solicitante_viagem" INTEGER,
    "viagem_id_viagem" INTEGER,
    "endereco" VARCHAR(255) NOT NULL,

    CONSTRAINT "parada_pkey" PRIMARY KEY ("id_parada")
);

-- CreateTable
CREATE TABLE "public"."solicitante_viagem" (
    "id_solicitante_viagem" SERIAL NOT NULL,
    "nome_completo" VARCHAR(255) NOT NULL,
    "telefone" CHAR(11) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "solicitante_viagem_pkey" PRIMARY KEY ("id_solicitante_viagem")
);

-- CreateTable
CREATE TABLE "public"."status_carro" (
    "id_status_carro" SERIAL NOT NULL,
    "status_carro" VARCHAR(255) NOT NULL,

    CONSTRAINT "status_carro_pkey" PRIMARY KEY ("id_status_carro")
);

-- CreateTable
CREATE TABLE "public"."status_mensagem" (
    "id_status_mensagem" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,

    CONSTRAINT "status_mensagem_pkey" PRIMARY KEY ("id_status_mensagem")
);

-- CreateTable
CREATE TABLE "public"."status_viagem" (
    "id_status_viagem" SERIAL NOT NULL,
    "status_viagem" VARCHAR(255) NOT NULL,

    CONSTRAINT "status_viagem_pkey" PRIMARY KEY ("id_status_viagem")
);

-- CreateTable
CREATE TABLE "public"."tipo_carro" (
    "id_tipo_carro" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipo_carro_pkey" PRIMARY KEY ("id_tipo_carro")
);

-- CreateTable
CREATE TABLE "public"."usuario" (
    "id_usuario" SERIAL NOT NULL,
    "primeiro_nome" VARCHAR(255) NOT NULL,
    "ultimo_nome" VARCHAR(255) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "telefone" CHAR(11) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "telefone_confirmado" BOOLEAN DEFAULT false,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "public"."viagem" (
    "id_viagem" SERIAL NOT NULL,
    "funcionario_id_funcionario" INTEGER,
    "carro_id_carro" INTEGER,
    "data_partida" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "viagem_pkey" PRIMARY KEY ("id_viagem")
);

-- CreateTable
CREATE TABLE "public"."viagem_acompanhante" (
    "viagem_id_viagem" INTEGER NOT NULL,
    "acompanhante_id_acompanhante" INTEGER NOT NULL,
    "solicitante_viagem_id_solicitante_viagem" INTEGER,

    CONSTRAINT "viagem_acompanhante_pkey" PRIMARY KEY ("viagem_id_viagem","acompanhante_id_acompanhante")
);

-- CreateTable
CREATE TABLE "public"."viagem_usuario" (
    "viagem_id_viagem" INTEGER NOT NULL,
    "usuario_id_usuario" INTEGER NOT NULL,
    "status_viagem_id_status_viagem" INTEGER,

    CONSTRAINT "viagem_usuario_pkey" PRIMARY KEY ("viagem_id_viagem","usuario_id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "public"."usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_telefone_key" ON "public"."usuario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "public"."usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."carro" ADD CONSTRAINT "carro_status_carro_id_status_carro_fkey" FOREIGN KEY ("status_carro_id_status_carro") REFERENCES "public"."status_carro"("id_status_carro") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."carro" ADD CONSTRAINT "carro_tipo_carro_id_tipo_carro_fkey" FOREIGN KEY ("tipo_carro_id_tipo_carro") REFERENCES "public"."tipo_carro"("id_tipo_carro") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."funcionario" ADD CONSTRAINT "funcionario_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcao_id_funcao_fkey" FOREIGN KEY ("funcao_id_funcao") REFERENCES "public"."funcao"("id_funcao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcionario_id_funcionario_fkey" FOREIGN KEY ("funcionario_id_funcionario") REFERENCES "public"."funcionario"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" ADD CONSTRAINT "mensagem_ouvidoria_categoria_mensagem_id_categoria_mensage_fkey" FOREIGN KEY ("categoria_mensagem_id_categoria_mensagem") REFERENCES "public"."categoria_mensagem"("id_categoria_mensagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" ADD CONSTRAINT "mensagem_ouvidoria_status_mensagem_id_status_mensagem_fkey" FOREIGN KEY ("status_mensagem_id_status_mensagem") REFERENCES "public"."status_mensagem"("id_status_mensagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" ADD CONSTRAINT "mensagem_ouvidoria_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."parada" ADD CONSTRAINT "parada_solicitante_viagem_id_solicitante_viagem_fkey" FOREIGN KEY ("solicitante_viagem_id_solicitante_viagem") REFERENCES "public"."solicitante_viagem"("id_solicitante_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."parada" ADD CONSTRAINT "parada_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem" ADD CONSTRAINT "viagem_carro_id_carro_fkey" FOREIGN KEY ("carro_id_carro") REFERENCES "public"."carro"("id_carro") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem" ADD CONSTRAINT "viagem_funcionario_id_funcionario_fkey" FOREIGN KEY ("funcionario_id_funcionario") REFERENCES "public"."funcionario"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_acompanhante_id_acompanhante_fkey" FOREIGN KEY ("acompanhante_id_acompanhante") REFERENCES "public"."acompanhante"("id_acompanhante") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_solicitante_viagem_id_solicitante_viag_fkey" FOREIGN KEY ("solicitante_viagem_id_solicitante_viagem") REFERENCES "public"."solicitante_viagem"("id_solicitante_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_status_viagem_id_status_viagem_fkey" FOREIGN KEY ("status_viagem_id_status_viagem") REFERENCES "public"."status_viagem"("id_status_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE NO ACTION ON UPDATE NO ACTION;
