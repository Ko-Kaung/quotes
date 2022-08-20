let newQuote = document.getElementById("new-quote");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let loader = document.getElementById("loader");
let quoteContainer = document.getElementById("quote-container");

let quoteData = [] ;
//  quoteGenerator();

newQuote.addEventListener("click",()=>{
quoteGenerator();
});

let loading =()=>{
    loader.hidden=false;
    quoteContainer.hidden = true;

}
let show = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

async function quoteGenerator(){
    const apiUrl = "http://api.quotable.io/random";
    loading();
    try{
        const response = await fetch(apiUrl);
        quoteData = await response.json();
      
        quote.textContent = quoteData.content;
 
          if(!quoteData.author){
            author.textContent = "Anonymous";
          }else{
            author.textContent = quoteData.author;
          }

          if(quoteData.content.length > 50){
            quote.classList.add("long-quote");
 
          }else{
            quote.classList.remove("long-quote");

          }
   show();

          

        //   console.log(quoteData)
      
    }catch(error){
        console.log(error)
    }

};
quoteGenerator();
loading();
