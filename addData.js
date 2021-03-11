console.log("JavaScript - AJAX");
console.log("Create Read Update Delete  - CRUD");
console.log("CRUD Operation - Create step");

document
  .getElementById("add-article-button")
  .addEventListener("click", function () {

    const articleTitle = document.getElementById("article-title").value;
    console.log("articleTitle", articleTitle);

    const articleContent = document.getElementById("article-content").value;
    console.log("articleContent", articleContent);


    if (articleTitle && articleContent) {
      const payload = {
        title: articleTitle,
        content: articleContent,
      };

      console.log("Payload:", payload);
      console.log("Payload Text:", JSON.stringify(payload));


      fetch("https://simple-json-server-scit.herokuapp.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), 
      }).then(getData);
    }
  });