const quoteText =document.querySelector(".quote"),
authorName=document.querySelector(".writter")
        quoteBtn=document.querySelector("button");
        function randomQuote()
        {
                 fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
                     console.log(result)
                     quoteText.innerText=result.content;
                     authorName.innerText="---"+result.author;
                 });
                
        }
         quoteBtn.addEventListener("click",randomQuote);