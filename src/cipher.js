const cipher = {

  encode: function (offset, string) {
    
    let newCode = "";
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
      
      const textEncode = string.charCodeAt(i);
      
      if (textEncode >= 65 && textEncode <= 90) {
        count = (textEncode - 65 + offset) % 26 + 65;
      } else if (textEncode >= 97 && textEncode <= 122) {
        count = (textEncode - 97 + offset) % 26 + 97;
      } else {
        count = textEncode
      }
      
      const newText = String.fromCharCode(count);

      newCode = newCode + newText     
    }
    return newCode
  },


  decode: function (offset, string) {
    
    let newCode = "";
    let count = 0;
   
    for (let i = 0; i < string.length; i++) {
      
      const textEncode = string.charCodeAt(i);
      if (textEncode >= 65 && textEncode <= 90) {
        count = (textEncode - 65 - (offset % 26) + 26) % 26 + 65;
      } else if (textEncode >= 97 && textEncode <= 122) {
        count = (textEncode - 97 - (offset % 26) + 26) % 26 + 97;
      } else {
        count = textEncode
      }
      
      const newText = String.fromCharCode(count);
     
      newCode = newCode + newText
    }
    return newCode
  }

};
