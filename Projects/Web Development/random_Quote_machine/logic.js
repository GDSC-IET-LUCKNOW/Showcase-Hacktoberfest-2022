const quoteText =document.querySelector(".quote"),
authorName=document.querySelector(".writter")
soundBtn = document.querySelector(".sound")
copydBtn = document.querySelector(".copy")
quoteBtn=document.querySelector("button");
function randomQuote()
{
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
  // console.log(result)
  quoteText.innerText=result.content;
  authorName.innerText="---"+result.author;
 });
                
        }
soundBtn.addEventListener("click",()=>{
    let uttrance= new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(uttrance)
    });

 copydBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText);
 });  
         quoteBtn.addEventListener("click",randomQuote);
