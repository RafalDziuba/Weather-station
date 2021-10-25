const quote = document.querySelector('.quote-content');
const author = document.querySelector('.author-content');
const btnQuote = document.querySelector('.get-quote');

const getQuote = () => {
  axios.get('https://api.quotable.io/random').then((res) => {
    console.log(res);
    quote.textContent = res.data.content;
    author.textContent = res.data.author;
  });
};

btnQuote.addEventListener('click', getQuote);
