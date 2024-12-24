const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



// let apiQuotes = [];
//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    quoteContainer.hidden = false;
    loader.hidden= true;
}
//show new quote
function newQuote() {
    loading(); // Hiển thị loader
    setTimeout(() => {
        const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        if (quote.author == null) {
            quoteAuthor.textContent = 'Unknown';
        } else {
            quoteAuthor.textContent = quote.author;
        }
        if (quote.text.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        // Đặt câu trích dẫn, ẩn loader
        quoteText.textContent = quote.text;
        complete();
    }, 2000); // Chờ 2 giây
}



// get quote from API
// async function getQuote(){
//     const apiURL = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {

//     }
// }
// getQuote();

// Tweet quote
function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterURL,'_blank');
}
//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
newQuote();
