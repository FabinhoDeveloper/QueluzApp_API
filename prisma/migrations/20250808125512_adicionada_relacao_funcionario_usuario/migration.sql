-- AddForeignKey
ALTER TABLE "public"."funcionario" ADD CONSTRAINT "funcionario_usuario_id_usuario_fkey" FOREIGN KEY ("usuario_id_usuario") REFERENCES "public"."usuario"("id_usuario") ON DELETE SET NULL ON UPDATE CASCADE;
