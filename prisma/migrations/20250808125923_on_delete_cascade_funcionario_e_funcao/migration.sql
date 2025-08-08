-- DropForeignKey
ALTER TABLE "public"."funcionario" DROP CONSTRAINT "funcionario_usuario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "public"."funcionario_funcao" DROP CONSTRAINT "funcionario_funcao_funcao_id_funcao_fkey";

-- DropForeignKey
ALTER TABLE "public"."funcionario_funcao" DROP CONSTRAINT "funcionario_funcao_funcionario_id_funcionario_fkey";

-- AddForeignKey
ALTER TABLE "public"."funcionario" ADD CONSTRAINT "funcionario_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcionario_id_funcionario_fkey" FOREIGN KEY ("funcionario_id_funcionario") REFERENCES "public"."funcionario"("id_funcionario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcao_id_funcao_fkey" FOREIGN KEY ("funcao_id_funcao") REFERENCES "public"."funcao"("id_funcao") ON DELETE CASCADE ON UPDATE CASCADE;
