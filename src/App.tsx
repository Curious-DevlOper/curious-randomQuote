import { useState } from 'react';
import data from './assets/quotes.json';
import { FaTwitter, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import './App.css';

// Define what a Quote is
interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return data.quotes[Math.floor(Math.random() * data.quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random()*128);
  const green = Math.floor(Math.random()*128);

  const blue = Math.floor(Math.random()*128);
  return `rgb(${red}, ${green}, ${blue})`

}
const transition= "all 1s"

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const [randomColor, setRandomColor]= useState<string>(getRandomColor())
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        < div className="quote-content" style={{color: randomColor}}>
          <h2 id="text"> 
            <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
            {quote.quote}
            <FaQuoteRight size="30" style={{marginLeft: "10px"}}/>
            </h2>
         <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
      <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Chinese%20Proverb&amp;content=The%20best%20time%20to%20plant%20a%20tree%20was%2020%20years%20ago.%20The%20second%20best%20time%20is%20now.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button" 
      style={{backgroundColor: "#1da1f2",
        marginRight:"10px"
      }}
         id="tweet-quote" >
          <FaTwitter color="white"></FaTwitter> </a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}> change quote</button>
      </div>

      </div>
     

 
    </div>
    
  );
}

export default App;
