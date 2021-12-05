
/**
* TODO: Implement a function that clears all the content
* prior to generating new random content
*/
function clearAll() {
    const memeContainer = document.querySelector('.meme-content')
    const jokeContainer = document.querySelector('.biro-content')
    const quoteContainer = document.querySelector('.quote-content')
    const riddlesContainer = document.querySelector('.riddles-content')

   memeContainer.innerHTML = '';
   jokeContainer.innerHTML = '';
   quoteContainer.innerHTML = '';
   riddlesContainer.innerHTML = '';
}

/**
* TODO: 
* - Loop through memes folder to get the memes
* - automated task
*/

const memes = [];
for(let i = 1 ; i <= 10 ; i++){
    let location = `./memes/${i}.jpg`;
    memes.push(location);
}

/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  // Value is a string representing image URL
  clearAll();
  const randomMemeUrl = getRandomData('memes');
  const newImage = document.createElement('img');
  const container = document.querySelector('.meme-content')
  newImage.setAttribute('src', randomMemeUrl)
  container.appendChild(newImage)
    
}

/**
* TODO: 
* - Show a random joke in the correct location
* - Never show more than 1 joke at a time
*/
function showJoke() {

  // Value is a string representing the joke
  clearAll();
  const randomJokeText = getRandomData('jokes');
  const joke = document.createElement('p');
  const container = document.querySelector('.biro-content')
  joke.textContent = randomJokeText
  container.appendChild(joke)
}

/**
* TODO: 
* - Show a random quote in the correct location
* - Never show more than 1 quote at a time
*/

function showQuote() {
  clearAll();
  const randomQuote = getRandomData('quotes');
  const quote = document.createElement('p');
  const author = document.createElement('p')
  const container = document.querySelector('.quote-content')
  quote.textContent = randomQuote.quote;
  author.textContent = `- ${randomQuote.author}`;
  container.appendChild(quote);
  container.appendChild(author);
}

/**
* TODO: 
* - Show a random bugtong in the correct location
* - Never show more than 1 bugtong at a time
* - Always hide the bugtong's answer initially
*/
function showRiddle() {

  clearAll();
  const randomRiddle = getRandomData('riddles');
  const {question, answer} = randomRiddle;
  const riddle = document.createElement('p');
  const ansElem = document.createElement('p')
  const container = document.querySelector('.riddles-content')
  riddle.textContent = question;
  ansElem.textContent = answer;
 
  ansElem.setAttribute('id' ,'riddle-answer');
  ansElem.hidden = true;
  clearAll();
  container.appendChild(riddle);
  container.appendChild(ansElem);
}

/**
* TODO: Unhide the bugtong's answer
* - If there is no bugtong shown, alert the user that there is no bugtong
* - If there is a bugtong shown and an answer shown, alert the user
*   that the answer is already revealed
* - If there is a bugtong shown but no answer, unhide the answer!
*/
function revealAnswers() {

    const riddlesContainer = document.querySelector('.riddles-content') // this our div
    const riddle = riddlesContainer.querySelector('p'); //we get all paragraph in div
    const answer = document.querySelector('#riddle-answer') //answer hidden
    
   if(riddle && answer.hidden){
       answer.hidden = false
   }else if(riddle){
       alert("Ang sagot ay nandiyan na");
   }else{
       alert("Wala pang bugtong!")
   }
   
}

// Random selection of buttons

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// Sorry sa aking mga corny na biro
const jokes = ['Ang python ay parang kopi; nakakaadik hahaha.', 'Nanood ako ng Java Language tutorial sa youtube; ngayon marunong na ako salita ng indiano', 'Meron lamang 10 tao dito sa mundo: yung alam ang binary at hindi.', 'Tsaka mo na ako angasan pag kaya mo na mag code ng walang kape.', 'Nabalitaan mo ba yung bagong Super Computer? sa sobrang bilis kaya nito magrun ng infinite loop sa loob ng 6 na segundo', 'Debugging: Para kang nagtitinidor ng sabaw.', 'Ang “Debugging” ay parang ikaw ang imbestigador sa ginawa mong krimen.', 'May dalawang uri ng pag co-code na walang error; yung pangatlo ang gumagana.', '(!Boolean) kaba kasi kahit sobrang galing mo mag sinungaling hahaha!'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
];

// Source: https://philnews.ph/2020/02/03/riddles-tagalog-examples-of-riddles-bugtong-in-tagalog/
const riddles = [
  { question: 'Sa araw nahihimbing At sa gabi ay gising.', answer: 'Paniki' },
  { question: 'Hindi hayop, hindi tao, pumupulupot sa tiyan mo.', answer: 'Sinturon' },
  { question: 'Dalawang batong itim, malayo ang nararating.', answer: 'Mata' },
  { question: 'Kay lapit-lapit na sa mata, di mo pa rin makita.', answer: 'Tenga' },
  { question: 'Lumuluha walang mata, lumalakad walang paa.', answer: 'Ballpen' },
  { question: 'Isang prinsesa, punong-puno ng mata.', answer: 'Pinya' }
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles
};

