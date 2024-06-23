document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const form = document.getElementById('chat-form');
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');
    const typingIndicator = document.getElementById('typing');
    const userList = document.getElementById('user-list');
    const messageSound = document.getElementById('message-sound');

    let typingTimeout;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const message = messageInput.value;

        if (username && message) {
            socket.emit('new user', username);
            socket.emit('chat message', message);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('input', () => {
        socket.emit('typing', true);
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => socket.emit('typing', false), 500);
    });

    socket.on('chat message', (msg) => {
        const item = document.createElement('div');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
        messageSound.play();
    });

    socket.on('typing', ({ user, isTyping }) => {
        typingIndicator.textContent = isTyping ? `${user} está escribiendo...` : '';
    });

    socket.on('user list', (users) => {
        userList.innerHTML = '';
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.textContent = user;
            userList.appendChild(userItem);
        });
    });
});
