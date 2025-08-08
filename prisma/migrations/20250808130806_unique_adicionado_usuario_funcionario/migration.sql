/*
  Warnings:

  - A unique constraint covering the columns `[usuario_id_usuario]` on the table `funcionario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "funcionario_usuario_id_usuario_key" ON "public"."funcionario"("usuario_id_usuario");
