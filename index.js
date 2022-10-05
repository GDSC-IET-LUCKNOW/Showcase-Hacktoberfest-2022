const $main = document.querySelector('.page-content');
let card = document.createElement("card");
card.classList.add("card");
let content = document.createElement("content");
content.classList.add("content");
let title = document.createElement("h2");
title.classList.add("title");
let imageDiv = document.createElement("div");
imageDiv.classList.add("imageDiv");
let quoteDiv = document.createElement("div");
quoteDiv.classList.add("quoteDiv");
let paragraph = document.createElement("p");
paragraph.classList.add("copy");
let SocialDiv = document.createElement("div");
SocialDiv.classList.add('socialDiv');
let Github = document.createElement("a");
Github.classList.add("social-icon");
Github.dataset.tooltip = "GitHub";
let GithubIcon = document.createElement("i");
GithubIcon.classList.add("fa");
GithubIcon.classList.add("fa-github");
Github.appendChild(GithubIcon);

let Linkedin = document.createElement("a");
Linkedin.classList.add("social-icon");
Linkedin.dataset.tooltip = "Linkedin";
let LinkedinIcon = document.createElement("i");
LinkedinIcon.classList.add("fa");
LinkedinIcon.classList.add("fa-linkedin");
Linkedin.appendChild(LinkedinIcon);

let Project = document.createElement("a");
Project.classList.add("social-icon");
Project.dataset.tooltip = "Project";
let TwitterIcon = document.createElement("i");
TwitterIcon.classList.add("fa");
TwitterIcon.classList.add("fa-code");
Project.appendChild(TwitterIcon);

SocialDiv.appendChild(Project);
SocialDiv.appendChild(Github);
SocialDiv.appendChild(Linkedin);
// Project.classList.add("btn");
card.appendChild(imageDiv);
content.appendChild(title);
content.appendChild(paragraph);
content.appendChild(quoteDiv);
content.appendChild(SocialDiv);

card.appendChild(content);
(async () => {
  console.log("hello");
  const dataForCards = await (await fetch('data.json')).json();
  let count = 0;
  Github.setAttribute("target", "_blank");
  Linkedin.setAttribute("target", "_blank");
  Project.setAttribute("target", "_blank");
  for (user of dataForCards.data) {
    imageDiv.style.backgroundImage = `url(${user.picture_url})`;
    Github.setAttribute("href", user.github);
    Linkedin.setAttribute("href", user.linkedin);
    Project.setAttribute("href", user.twitter);
    console.log(user);
    console.log(count);
    count += 1;
    title.innerText = `${user.name}`;
    paragraph.innerText = `Batch ${user.batch}`;
    quoteDiv.innerText = user.quote;
    $main.appendChild(card.cloneNode(true));
  }
})();

