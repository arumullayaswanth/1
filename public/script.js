document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('message-form');
  const input = document.getElementById('message-input');
  const chatWindow = document.querySelector('.chat-window');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const messageText = input.value.trim();
    if (messageText === '') return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'from-me');
    messageDiv.textContent = messageText;

    chatWindow.appendChild(messageDiv);
    input.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
});
