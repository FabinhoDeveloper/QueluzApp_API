export default function gerarNumeroProtocolo() {
  const agora = new Date();

  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');

  // Pode usar segundos ou um número aleatório de 3 dígitos
  const aleatorio = String(Math.floor(Math.random() * 1000)).padStart(3, '0');

  return `${ano}${mes}${dia}${hora}${minuto}${aleatorio}`;
}
