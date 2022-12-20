const pageHeader = document.createElement('h1');
pageHeader.innerText = 'USERS';
const usersDiv = document.createElement('div');
usersDiv.classList.add('users-list');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users.map(user => {
        const userName = document.createElement('h2');
        userName.classList.add('user');
        const anchorUserDetails = document.createElement('a');
        anchorUserDetails.innerText = `${user.name}`;
        anchorUserDetails.href = `http://localhost:63342/javaScript/l10_fetch/user-details/userDetails.html?id=${user.id}`;
        userName.appendChild(anchorUserDetails);
        usersDiv.appendChild(userName);
    }));
document.body.append(pageHeader, usersDiv);