// Set Variables/Constants
const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector(".newQuote"),
    authorName = document.querySelector(".author"),
    copyBtn = document.querySelector(".copy"),
    dateElement = document.querySelector(".date");
    
// Get Date
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const month = months[currentDate.getMonth()];
const day = currentDate.getDate();

dateElement.innerHTML = `Here's your daily quote for ${month} ${day}.`;

// Fetch and Display a Random Quote
function randomQuote() {
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = `"` + result.content + `"`;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    })
}

//Copy to Clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

randomQuote();

quoteBtn.addEventListener("click", randomQuote);
