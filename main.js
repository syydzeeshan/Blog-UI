let createPost = document.forms.createPost;
let submitPost = document.getElementById("submitPost");
let postContainer = document.getElementsByClassName("blog-post")[0];

class Post {
  constructor(title, content, author, category) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.category = category;
  }
}

let posts = [];

function popError(message) {
  alert("Please fill out all fields correctly " + message);
}

function validatePost(post) {
  if (post.title.length < 5 || post.title.length > 100) {
    popError("Title must be at least 5 characters long");
    return false;
  }
  if (post.content.length < 10 || post.content.length > 2000) {
    popError("Content must be at least 10 characters long");
    return false;
  }
  if (post.author.length < 5 || post.author.length > 30) {
    popError("Author must be at least 5 characters long");
    return false;
  }
  if (post.category.length < 5 || post.category.length > 20) {
    popError("Category must be at least 5 characters long");
    return false;
  }
  return true;
}

/* 
<article>
  <h3>posts.title</h3>
  <p class="blog-post-meta">January 1, 2023 by posts.author</p>
  <p>posts.category</p>
  <hr />
  <p>posts.content</p>
</article>; 
*/

function renderPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    let article = document.createElement("article");
    article.innerHTML = `<h3> ${posts[i].title} </h3>
    <p class="blog-post-meta" >January 1, 2023 by <a href="#">${posts[i].author}</a> </p>
    <p>${posts[i].category}</p>
    <hr/>
    <p>${posts[i].content}</p>`;
    postContainer.appendChild(article);
  }
}
