document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            data.users.push({ username: username });

            fetch('save_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'login.html';
                } else {
                    alert('Error al registrar usuario');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al registrar usuario');
            });
        })
        .catch(error => console.error('Error:', error));
});
