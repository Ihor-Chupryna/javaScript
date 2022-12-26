const usersListDiv = document.getElementsByClassName('users-list')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        users.map(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            const userIdWithName = document.createElement('h2');
            userIdWithName.innerText = `${user.id}) ${user.name}`;
            const userDetailsButton = document.createElement('button');
            userDetailsButton.innerText = 'user details';
            userDetailsButton.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
                document.location.href = `user-details/user.details.html`;
            }
            userDiv.append(userIdWithName, userDetailsButton);
            usersListDiv.appendChild(userDiv);
        });
    });
