// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((articles) => {
    //retrieves the articles data
    const articlesData = articles.data.articles;
    //loops over the articles and returns the topics
    const articlesKeys = Object.keys(articlesData);

    //loops over each topic
    articlesKeys.forEach((topic) => {
      //loops over each article in the corresponding topic appending the html to the container passing in the article to article maker
      articlesData[topic].forEach((article) => {
        document
          .querySelector(".cards-container")
          .insertAdjacentHTML("afterbegin", articleMaker(article));
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

function articleMaker(article) {
  const card = `
    <div class="card">
        <div class="headline">${article.headline}</div>
        <div class="author">
            <div class="img-container">
                <img src=${article.authorPhoto} />
            </div>
            <span>By ${article.authorName}</span>
        </div>
    </div>
    `;

  return card;
}

// const test =  {
//     "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//     "authorPhoto": "./assets/sir.jpg",
//     "authorName": "SIR RUFF'N'STUFF"
// }

// articleMaker(test)
