$(document).ready(function(){
  getQuote();
  
  var randomQuote;
  var author;
  function getQuote(){
    //Made quotes array to global var
/* var quotes = ["You don't like your destiny? Accept it.
Instead, have the courage to change it to the way you want it to be.", "A lesson without pain is meaningless. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart ... A Fullmetal Heart.", "That's because no one can gain without sacrificing something.," "A genius, huh? What does that mean? 'Genius'? So i was not born with a whole lot of natural of talent, not gifted like others .. But I work hard and i never give up, that's my gift", "Moping around filled with sadness and sorrow .. What will come of it? If we're to die one day, wouldn't it be better to have no regrets?", "You guys don't notice that we are gifted just by being humans.", "We should live our lives to the fullest. You never know, we may be dead by tomorrow.", "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.", "If I live through today, that'll be enough.", "The difference between the novice and the master is that the master has failed more than the novice has tried.", "If you win, you live. If you lose, you die. If you don't fight, you can't win!", "How can you move forward if you keep regretting the past.", "May all your bacon burn", "Freedom is something that you need to actively acquire. It's not something that's given with no strings attached. To be free means to take responsibility, and to prepare yourself for what's to come.", "All we can do is live until the day we die. Control what we can...and fly free!", "The country? The skies? You can have them. I’m busy just protecting what’s right in front of me. I don’t know what’ll happen to me in the future, but if something has fallen at my feet, then the least I can do is pick it up.", "In order for a mediocre man to defeat a genius, he has to become a monster.", "Whatever you lose, you'll find it again. But what you throw away you'll never get back.", "The world is not beautiful, and that is why it is beautiful.", "When you give up, that's when the game ends.", "You're gonna carry that weight."];
var author = ["-Naruto Uzumaki", "-Edward Elric", "-Rock Lee", "-Ciel Phantomhive", "-Parayste", "-Kaori Miyazono", "-Gildarts", "-Portgas D. Ace", "-Koro-sensei", "-Eren Jaeger", "-Edward Elric", "-Calcifer", "-Charles Beams", "-Deneil Young", "-Gintoki Sakata", "-Ikki Kurogane", "-Kenshin Himura", "-Kino", "-Mitsuyoshi Anzai", "-Ending Title Card"];

randomNum = Math.floor(Math.random()*quotes.length);
randomQuote = quotes[randomNum];
author = author[randomNum];*/
    var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      randomQuote = data.quoteText;
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html("-"+data.quoteAuthor);
      
    });
    
  };
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  
  $("#newQuote").on("click", function(){
    getQuote();
  });
});