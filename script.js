// let quotesDataa=[];
// async function quoteGenerator(){
//     const apiUrl = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
//     try{
//         const resopnse = await fetch(apiUrl);
//          quotesDataa =  await resopnse.json();
//          console.log(quotesDataa[1]);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
let quoteData = [] ;

async function quoteGenerator(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        quoteData = await response.json();
        console.log(quoteData[Math.floor(Math.random() * quoteData.length)]);
    }catch(error){
        console.log(error);
    }
}
quoteGenerator();
 
