document.getElementById('generate-password').addEventListener('click', () => {
    const minLength = parseInt(document.getElementById('min-length').value);
    const maxLength = parseInt(document.getElementById('max-length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSpecialChars = document.getElementById('special-chars').checked;
  
    if (isNaN(minLength) || isNaN(maxLength) || minLength < 1 || maxLength < minLength) {
      alert('Podaj poprawne wartości dla minimalnej i maksymalnej długości hasła!');
      return;
    }
  
    const password = generatePassword(minLength, maxLength, includeUppercase, includeSpecialChars);
    alert(`Wygenerowane hasło: ${password}`);
  });
  
  function generatePassword(minLength, maxLength, includeUppercase, includeSpecialChars) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const digits = '0123456789';
  
    let characterPool = lowercaseChars + digits;
  
    if (includeUppercase) {
      characterPool += uppercaseChars;
    }
    if (includeSpecialChars) {
      characterPool += specialChars;
    }
  
    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
  
    return password;
  }