/*
  Warnings:

  - You are about to drop the column `status_mensagem_id_status_mensagem` on the `mensagem_ouvidoria` table. All the data in the column will be lost.
  - Added the required column `fabricante` to the `carro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mensagem` to the `mensagem_ouvidoria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."carro" DROP CONSTRAINT "carro_status_carro_id_status_carro_fkey";

-- DropForeignKey
ALTER TABLE "public"."carro" DROP CONSTRAINT "carro_tipo_carro_id_tipo_carro_fkey";

-- DropForeignKey
ALTER TABLE "public"."funcionario" DROP CONSTRAINT "funcionario_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "public"."funcionario_funcao" DROP CONSTRAINT "funcionario_funcao_funcao_id_funcao_fkey";

-- DropForeignKey
ALTER TABLE "public"."funcionario_funcao" DROP CONSTRAINT "funcionario_funcao_funcionario_id_funcionario_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" DROP CONSTRAINT "mensagem_ouvidoria_categoria_mensagem_id_categoria_mensage_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" DROP CONSTRAINT "mensagem_ouvidoria_status_mensagem_id_status_mensagem_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" DROP CONSTRAINT "mensagem_ouvidoria_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "public"."parada" DROP CONSTRAINT "parada_solicitante_viagem_id_solicitante_viagem_fkey";

-- DropForeignKey
ALTER TABLE "public"."parada" DROP CONSTRAINT "parada_viagem_id_viagem_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem" DROP CONSTRAINT "viagem_carro_id_carro_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem" DROP CONSTRAINT "viagem_funcionario_id_funcionario_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_acompanhante" DROP CONSTRAINT "viagem_acompanhante_acompanhante_id_acompanhante_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_acompanhante" DROP CONSTRAINT "viagem_acompanhante_solicitante_viagem_id_solicitante_viag_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_acompanhante" DROP CONSTRAINT "viagem_acompanhante_viagem_id_viagem_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_usuario" DROP CONSTRAINT "viagem_usuario_status_viagem_id_status_viagem_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_usuario" DROP CONSTRAINT "viagem_usuario_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "public"."viagem_usuario" DROP CONSTRAINT "viagem_usuario_viagem_id_viagem_fkey";

-- AlterTable
ALTER TABLE "public"."carro" ADD COLUMN     "fabricante" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "public"."mensagem_ouvidoria" DROP COLUMN "status_mensagem_id_status_mensagem",
ADD COLUMN     "data_envio" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "mensagem" VARCHAR(255) NOT NULL,
ADD COLUMN     "status_mensagem" VARCHAR(255);

-- AddForeignKey
ALTER TABLE "public"."carro" ADD CONSTRAINT "carro_status_carro_id_status_carro_fkey" FOREIGN KEY ("status_carro_id_status_carro") REFERENCES "public"."status_carro"("id_status_carro") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."carro" ADD CONSTRAINT "carro_tipo_carro_id_tipo_carro_fkey" FOREIGN KEY ("tipo_carro_id_tipo_carro") REFERENCES "public"."tipo_carro"("id_tipo_carro") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" ADD CONSTRAINT "mensagem_ouvidoria_categoria_mensagem_id_categoria_mensage_fkey" FOREIGN KEY ("categoria_mensagem_id_categoria_mensagem") REFERENCES "public"."categoria_mensagem"("id_categoria_mensagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensagem_ouvidoria" ADD CONSTRAINT "mensagem_ouvidoria_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."parada" ADD CONSTRAINT "parada_solicitante_viagem_id_solicitante_viagem_fkey" FOREIGN KEY ("solicitante_viagem_id_solicitante_viagem") REFERENCES "public"."solicitante_viagem"("id_solicitante_viagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."parada" ADD CONSTRAINT "parada_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem" ADD CONSTRAINT "viagem_carro_id_carro_fkey" FOREIGN KEY ("carro_id_carro") REFERENCES "public"."carro"("id_carro") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem" ADD CONSTRAINT "viagem_funcionario_id_funcionario_fkey" FOREIGN KEY ("funcionario_id_funcionario") REFERENCES "public"."funcionario"("id_funcionario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_acompanhante_id_acompanhante_fkey" FOREIGN KEY ("acompanhante_id_acompanhante") REFERENCES "public"."acompanhante"("id_acompanhante") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_solicitante_viagem_id_solicitante_viag_fkey" FOREIGN KEY ("solicitante_viagem_id_solicitante_viagem") REFERENCES "public"."solicitante_viagem"("id_solicitante_viagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_acompanhante" ADD CONSTRAINT "viagem_acompanhante_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_status_viagem_id_status_viagem_fkey" FOREIGN KEY ("status_viagem_id_status_viagem") REFERENCES "public"."status_viagem"("id_status_viagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."viagem_usuario" ADD CONSTRAINT "viagem_usuario_viagem_id_viagem_fkey" FOREIGN KEY ("viagem_id_viagem") REFERENCES "public"."viagem"("id_viagem") ON DELETE CASCADE ON UPDATE CASCADE;
