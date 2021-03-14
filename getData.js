console.log("JavaScript - AJAX");
console.log("CRUD Operation - Read");

const articleListHtml = document.querySelector(".article-list");
let articleInfo;

document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
  
    .then(handleFetchResponse)
    
    .then(useJSONResponse);
}

function handleFetchResponse(response) {
  // console.log("response", response);
  
  return response.json();
}

function useJSONResponse(json) {
  // console.log(json);

  renderArticles(json);
}

function renderArticles(articleList) {
  
  articleListHtml.innerText = "";

  for (const articleData of articleList) {
    const article = document.createElement("div");
    article.setAttribute('id', articleData.id);

    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");

    articleListHtml.appendChild(article);

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    fetch("https://simple-json-server-scit.herokuapp.com/comments?postId=" + articleData.id)
  
    .then(handleFetchResponse)
    
    .then(renderArticle);
  }
}

function renderArticle(articleList){
    for (const articleData of articleList) {
      renderComment(articleData);
    }
}

function renderComment(articleData){

  const comment = document.createElement("div");
  comment.setAttribute('class', 'comment');
  comment.style.paddingLeft = '20px';

  const commentUsername = document.createElement("h4");
  commentUsername.setAttribute('class', 'comment-username');

  const commentContent = document.createElement("p");
  commentContent.setAttribute('class', 'comment-content');

  let articleOwner = document.getElementById(articleData.postId);
  articleOwner.appendChild(comment);

  comment.appendChild(commentUsername);
  comment.appendChild(commentContent);

  commentContent.innerText = articleData.content;
  commentUsername.innerText = articleData.username;
}