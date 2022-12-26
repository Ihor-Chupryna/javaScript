const url = new URL(location.href);
const post = JSON.parse(url.searchParams.get('data'));

const postDetailsDiv = document.createElement('div');
postDetailsDiv.classList.add('post-details');
document.body.appendChild(postDetailsDiv);

const previousPage = document.createElement('a');
previousPage.innerText = 'back';
previousPage.href = `../user-details/user.details.html`;
postDetailsDiv.appendChild(previousPage);

for (const key in post) {
    const postItem = document.createElement('p');
    postItem.innerHTML = `<span>${key}:</span> ${post[key]}`;
    postDetailsDiv.appendChild(postItem);
}

const commentsHeader = document.createElement('h3');
postDetailsDiv.appendChild(commentsHeader);
const commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments-list');
commentsHeader.innerText = 'Comments:';
postDetailsDiv.appendChild(commentsDiv);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then((comments) => comments.map(comment => {
        const commentItem = document.createElement('p');
        commentItem.classList.add('comment');
        commentItem.innerText = `- ${comment.name}`;
        commentsDiv.append(commentItem);
    }));

