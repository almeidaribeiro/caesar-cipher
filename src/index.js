function cipherMessage() {
  
  let string = document.forms["textMessage"]["textMessage"].value;
  
  let offset = parseInt(document.forms["textMessage"]["keyNumber"].value);
  
  if (string === ""){
    return 
  } 
  if (!offset || offset < 0){
    return 
  }


  var retorno = cipher.encode(offset, string);  
  
  document.getElementById("resultCipher").innerHTML = retorno;
  
  document.getElementById("cipher").setAttribute("hidden", "true")
 
  document.getElementById("resultPanelCipher").removeAttribute("hidden");
}

function decipherMessage(){
  
  let string = document.forms["textMessage"]["textMessage"].value;
  
  let offset = document.forms["textMessage"]["keyNumber"].value;

if (string === ""){
    return 
  } 
  if (!offset || offset < 0){
    return 
  }
 
  var retorno = cipher.decode(offset, string);  
  
  document.getElementById("resultDecipher").innerHTML = retorno;
  
  document.getElementById("cipher").setAttribute("hidden", "true")
 
  document.getElementById("resultPanelDecipher").removeAttribute("hidden");
}

function goBackCipher(){

  document.getElementById("resultPanelCipher").setAttribute("hidden", "true")
  
  document.getElementById("cipher").removeAttribute("hidden");

  document.getElementById("textLetter").value = ""; 
  
  document.getElementById("textNumber").value = "";
}

function goBackDecipher(){

  document.getElementById("resultPanelDecipher").setAttribute("hidden", "true")
  
  document.getElementById("cipher").removeAttribute("hidden");

  document.getElementById("textLetter").value = ""; 
  
  document.getElementById("textNumber").value = ""; 
}