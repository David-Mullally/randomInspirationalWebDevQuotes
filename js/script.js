let inspirationalQuotesArray =[
  {
    description:
    'Everything is a WIP',
    source:
    'images/inspirational-quote-1.jpg'
  },
  {
    description:
    'I want to make beautiful things...',
    source:
    'images/inspirational-quote-2.jpg'
  },
  {
    description:
    '...show me the code',
    source:
    'images/inspirational-quote-3.jpg'
  },
  {
    description:
    '..design is how it works',
    source:
    'images/inspirational-quote-4.jpg'
  },
  {
    description:
    '.until somebody is using it',
    source:
    'images/inspirational-quote-5.jpg'
  },
  {
    description:
    'If you think math is hard',
    source:
    'images/inspirational-quote-6.jpg'
  },
  {
    description:
    'A dsngr kws..',
    source:
    'images/inspirational-quote-7.jpg'
  },
  {
    description:
    '...subtle cues...',
    source:
    'images/inspirational-quote-8.jpg'
  }
]


let count = Math.floor(Math.random() * inspirationalQuotesArray.length);
let refNumber;
let body = document.body;

let scrollQuotes = function() {
  refNumber = inspirationalQuotesArray[`${count}`].source;
  body.innerHTML = `<img class="bg" src="${refNumber}">`;
};

let scroll = document.querySelector(".bg");

scroll.onclick = function(){
  if (count > - 1){
    count = Math.floor(Math.random() * inspirationalQuotesArray.length);
    scrollQuotes();
  }
}

scrollQuotes();
