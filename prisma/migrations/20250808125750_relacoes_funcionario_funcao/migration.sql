-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcionario_id_funcionario_fkey" FOREIGN KEY ("funcionario_id_funcionario") REFERENCES "public"."funcionario"("id_funcionario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."funcionario_funcao" ADD CONSTRAINT "funcionario_funcao_funcao_id_funcao_fkey" FOREIGN KEY ("funcao_id_funcao") REFERENCES "public"."funcao"("id_funcao") ON DELETE RESTRICT ON UPDATE CASCADE;
