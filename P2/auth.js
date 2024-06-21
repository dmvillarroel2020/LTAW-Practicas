document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    // Check if user is already logged in
    const username = getCookie('username');
    if (username) {
        welcomeMessage.textContent = `Bienvenido, ${username}`;
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;

            fetch('users.json')
                .then(response => response.json())
                .then(data => {
                    const users = data.users;
                    const user = users.find(u => u.username === username);

                    if (user) {
                        setCookie('username', username, 1);
                        window.location.href = 'index.html';
                    } else {
                        alert('Invalid username. Try again.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                    alert('An error occurred. Please try again later.');
                });
        });
    }
});

function logout() {
    setCookie('username', '', -1);
    window.location.href = 'index.html';
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
