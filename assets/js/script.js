function Send() {
  var comentario = document.getElementById("addComment").value;
  if (comentario == "") {
    alert("Erro: O campo de comentário está vazio!");
    return;
  }
  document.getElementById("result").innerText = comentario;
  alert("Comentário adicionado");
  document.getElementById("addComment").value = "";

}
