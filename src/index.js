function cipherMessage() {
  
  //pega o valor do input da mensagem a ser cifrada
  let text = document.forms["textMessage"]["textMessage"].value;
  //pega o valor do offset da mensagem a ser cifrada
  let number = document.forms["textMessage"]["keyNumber"].value;
  console.log(number);

  //printa o resultado da mensagem cifrada na tela de resultado cifra
  document.getElementById("resultCipher").innerHTML = text;

  // esconder tela de input cifrar e decifrar
  document.getElementById("cipher").setAttribute("hidden", "true")
  // mostrar tela de resultado cifrado
  document.getElementById("resultPanelCipher").removeAttribute("hidden");

}

function decipherMessage(){

  //pega o valor do input da mensagem a ser decifrada
  let text = document.forms["textMessage"]["textMessage"].value;
  // pega o valor do offset da mensagem a ser decifrada
  let number = document.forms["textMessage"]["keyNumber"].value;
  console.log(number);


  //printa o resultado da mensagem decifrada na tela de resultado decifra
  document.getElementById("resultDecipher").innerHTML = text;

  // esconder tela de input cifrar e decifrar
  document.getElementById("cipher").setAttribute("hidden", "true")
  // mostrar tela de resultado decifrado
  document.getElementById("resultPanelDecipher").removeAttribute("hidden");

}
