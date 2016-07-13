/*
Jason Parker
Treehouse Full JavaScript Tech Degree Project 1
July 12, 2016
*/
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(function(){printQuote()}, 30000);//automatically calls printQuote every 30 seconds to change quote

//create array of quote objects

var quotePool = [
  {
    quote: 'If everyone helps to hold up the sky, then one person does not become tired.',
    source: 'Dr. Askhari Johnson Hodari',
    tag: 'unity',
    citation: 'unkown',
    year: 'unkown',
    displayCount: 0
  },
  {
    quote: 'To strengthen the muscles of your heart, the best exercise is lifting someone else\'s spirit whenever you can.',
    source: 'Dodinsky',
    tag: 'kindness',
    citation: 'unkown',
    year: 'unkown',
    displayCount: 0
  },
  {
    quote: 'I\'m a greater believer in luck, and I find the harder I work the more I have of it.',
    source: 'Thomas Jefferson',
    tag: 'hard work',
    citation: 'unkown',
    year: 'unkown',
    displayCount: 0
  },
  {
    quote: 'Sometimes when fortune scowls most spitefully, she is preparing her most dazzling gifts.',
    source: 'Winston Churchill',
    tag: 'misfortune',
    citation: 'unkown',
    year: 1931,
    displayCount: 0
  },
  {
    quote: 'Great things in business are never done by one person. They\'re done by a team of people.',
    source: 'Steve Jobs',
    tag: 'unity',
    citation: 'BrainyQuote.com. Xplore Inc, 2016. 12 July 2016. <a href="http://www.brainyquote.com/quotes/quotes/s/stevejobs737723.html">http://www.brainyquote.com/quotes/quotes/s/stevejobs737723.html</a>',
    year: 'unkown',
    displayCount: 0
  }
];

//dynamically selects a valid index for the array quotePool based of its length property
function randomArrayIndex(min, max)
{
  min = 0;
  max = quotePool.length - 1;
  return Math.round(Math.random() * (max - min) + min);
}

/*selects a random quote object to display and returns it making sure there are
no duplicates until they have all been seen at least once*/
function getRandomQuote()
{
  var randomQuote = quotePool[randomArrayIndex()]; // generates random quote
  if(randomQuote.displayCount == 0)// if display count = 0 quote has not been seen
  {
    randomQuote.displayCount += 1;
    return randomQuote;//returns unseen random quote
  }
  else if (randomQuote.displayCount > 0)//if random quote has been seen
  {
    for(i = 0; i < quotePool.length - 1; i++)//cycles through array
    {
          if(quotePool[i].displayCount == 0)//if a quote has not been seen it is selected
          {
            quotePool[i].displayCount += 1;
            return quotePool[i];//returns unseen quote
          }
    }
    return randomQuote;//all quotes have been seen return original randomly selected quote
  }

}


//function prints quote properties inside div quote-box, inner html
function printQuote()
{
   var selectedQuote = getRandomQuote();
   var quoteText;
   quoteText = '<p class="tag">' + selectedQuote.tag + '</p>';
   quoteText += '<p class="quote">' + selectedQuote.quote + '</p>';
   quoteText += '<p class="source">' + selectedQuote.source;
   if(selectedQuote.citation != 'unkown')// if no citation will not create innerHTML spans
   {
     quoteText += '<span class="citation">' + selectedQuote.citation;
     quoteText += '</span>';
   }
   if(selectedQuote.year != 'unkown')//if no year will not create innerHTML spans
   {
     quoteText += '<span class="year">' + selectedQuote.year;
     quoteText += '</span>';
   }
   quoteText += '</p>'
  document.getElementById('quote-box').innerHTML = quoteText;
  document.body.style.backgroundColor = randomRGB();// randomly changes background color with each changing quote/click of button
}

//create random rgb color selector to change background-color with each quote
function randomRGB()
{
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' + red + ' , ' + green + ' , ' + blue + ')';
  return rgbColor;
}
