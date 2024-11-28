document.querySelector("form").addEventListener("submit", function (e) {
  let valid = true;

  // Walidacja pola "Imię" i "Nazwisko"
  const nameFields = document.querySelectorAll('input[type="text"]');
  nameFields.forEach((field) => {
    if (!field.value.match(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/)) {
      alert("Pole " + field.placeholder + " może zawierać tylko litery.");
      valid = false;
    }
  });

  // Walidacja e-maila
  const emailField = document.querySelector('input[type="email"]');
  if (!emailField.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    alert("Proszę wprowadzić poprawny adres e-mail.");
    valid = false;
  }

  // Walidacja pola "Temat"
  const subjectField = document.querySelector("select");
  if (subjectField.value === "") {
    alert("Proszę wybrać temat wiadomości.");
    valid = false;
  }

  // Walidacja pola "Wiadomość"
  const messageField = document.querySelector("textarea");
  if (messageField.value.length < 10) {
    alert("Wiadomość musi zawierać co najmniej 10 znaków.");
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Zatrzymanie wysyłania formularza, jeśli którykolwiek test nie przeszedł
  }
});
