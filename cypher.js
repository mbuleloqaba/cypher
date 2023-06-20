function encodeMessage(message) {
    let encodedMessage = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      let encodedChar = char;
      
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const encodedIndex = (charIndex + 15) % 26;
        encodedChar = alphabet[encodedIndex];
        if (isUpperCase) {
          encodedChar = encodedChar.toUpperCase();
        }
      }
      
      encodedMessage += encodedChar;
    }
    
    return encodedMessage;
  }
  
  console.log(encodeMessage('Hello, world!')); // Outputs: 'Wtaad, iadxp!'

//Used definitions from Hyperion Dev Full Stack Software and Web Developer pdf resourse "Capstone Project II —Arrays, Functions, and String Handling"    