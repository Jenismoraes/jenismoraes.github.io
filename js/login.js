document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email) {
      alert('Por favor, insira um e-mail.');
      return;
    }

    if (!senha) {
      alert('Por favor, insira uma senha.');
      return;
    }

    window.location.href = 'atividades.html';
  });
