const url = new URL(location.href);
const post = JSON.parse(url.searchParams.get('data'));

const postDetailsDiv = document.createElement('div');
postDetailsDiv.classList.add('post-details');
const previousPostDetailsPage = document.createElement('a');

previousPostDetailsPage.innerText = 'back';
previousPostDetailsPage.href = `../user-details/user.details.html`;
postDetailsDiv.appendChild(previousPostDetailsPage);
document.body.appendChild(postDetailsDiv);

for (const key in post) {
    const postItem = document.createElement('p');
    postItem.innerHTML = `<span>${key}:</span> ${post[key]}`;
    postDetailsDiv.appendChild(postItem);
}

const commentsHeader = document.createElement('h3');
postDetailsDiv.appendChild(commentsHeader);
const commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments-list');
postDetailsDiv.appendChild(commentsDiv);
commentsHeader.innerText = 'Comments:';
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then((comments) => comments.map(comment => {
        const commentItem = document.createElement('p');
        commentItem.classList.add('comment');
        commentItem.innerText = `- ${comment.name}`;
        commentsDiv.append(commentItem);
    }));

