document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;

        fetch('users.json')
            .then(response => response.json())
            .then(data => {
                const users = data.users;
                const user = users.find(u => u.username === username);

                if (user) {
                    document.cookie = `username=${username}; path=/`;
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
});
