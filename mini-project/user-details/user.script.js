const user = JSON.parse(localStorage.getItem('user'));

const userDetailsDiv = document.createElement('div');
userDetailsDiv.classList.add('user-details');
document.body.appendChild(userDetailsDiv);

const previousPage = document.createElement('a');
previousPage.innerText = 'back';
previousPage.href = `../index.html`;
userDetailsDiv.appendChild(previousPage);

function objectIter(obj) {
    if (typeof obj === 'object') {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const h3 = document.createElement('h3');
                h3.innerText = `${key}`;
                userDetailsDiv.appendChild(h3);
                objectIter(obj[key]);
            } else {
                const userItemP = document.createElement('p');
                userItemP.innerHTML = `<span>${key}:</span> ${obj[key]}`;
                userDetailsDiv.appendChild(userItemP);
            }
        }
    }
}

objectIter(user);

const userPostsButton = document.createElement('button');
userPostsButton.classList.add('post-button');
userPostsButton.innerText = 'post of current user';
const userPostsDiv = document.createElement('div');
userPostsDiv.classList.add('posts-list');
document.body.appendChild(userPostsDiv);

userPostsButton.onclick = () => {
    userPostsButton.hidden = !userPostsButton.hidden;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then((posts) => {
            posts.map(post => {
                const postItem = document.createElement('div');
                postItem.innerText = `${post.title}`;
                postItem.classList.add('post')
                const postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details'
                postItem.appendChild(postDetailsButton);
                postDetailsButton.onclick = () => {
                    document.location.href = `../post-details/post.details.html?data=${JSON.stringify(post)}`;
                }
                userPostsDiv.appendChild(postItem);
            });
        });
}
userDetailsDiv.appendChild(userPostsButton);




