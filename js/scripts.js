var quotes = [{
  movie: "Snow White and the Seven Dwarfs",
  quote: "Magic Mirror on the wall, who is the fairest one of all?",
  scene: "Br0DCEEBplY",
  year: "1937"
}, {
  
  movie: "Terminator 2: Judgement Day",
  quote: "Hasta la vista, baby.",
  scene: "LRxaXmXvjnU",
  year: "1991"
}, {
 
  movie: "Star Wars: The Empire Strikes Back",
  quote: "Do. Or do not. There is no try",
  scene: "BQ4yd2W50No",
  year: "1980"
}, {
  
  movie: "Glengarry Glen Ross",
  quote: "Always be closing.",
  scene: "Yz246_Pjjkc",
  year: "1992"
}, {
  movie: "Casablanca",
  quote: "Here's looking at you, kid.",
  scene: "rEWaqUVac3M",
  year: "1942"
}, {
  movie: "Sudden Impact",
  quote: "Go ahead, make my day.",
  scene: "3ishbTwXf1g",
  year: "1983"
},{
  movie: "All About Eve",
  quote: "Fasten your seatbelts. It's going to be a bumpy night.",
  scene: "LPPJdOGshUM",
  year: "1950"
}, {
  movie: "Star Wars",
  quote: "May the Force be with you.",
  scene: "D9XYKY4Km20",
  year: "1977"
}, {
  movie: "Taxi Driver",
  quote: "You talkin' to me?",
  scene: "lQkpes3dgzg",
  year: "1976"
}];



function updateQuote() {
  var quoteId = Math.floor(Math.random() * quotes.length);
  while ($(".quote-actual").html() == quotes[quoteId].quote) {
    var quoteId = Math.floor(Math.random() * quotes.length);
  }
  $(".quote-actual").html(quotes[quoteId].quote);
  $(".movie-year").html("(" + quotes[quoteId].year + ")");
  $(".movie-title").html(quotes[quoteId].movie);
  var youTubeUrl = "https://www.youtube.com/embed/" + quotes[quoteId].scene;
  $(".youtube-iframe").html("<iframe width=100% height='300px' src='" + youTubeUrl + "?showinfo=0' frameborder='0' allowfullscreen>"); 
};

function truncate(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    str = str.slice(0, num);
    if (str.length > 3) {
      return str.slice(0, -3) + "...";
    } else {
      return str + "...";
    }
  }
};

$("document").ready(function() {
  $(".new-quote").on("click", function() {
    $(".card").fadeOut("fast", function() {
      updateQuote();
    });
    $(".card").delay(1000).fadeIn("slow");
  });
  $(".tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes,movies&text=" + truncate("\"" + $(".quote-actual").html() + "\" - " + $(".movie-title").html(), 124), "_blank", "height=300, width=400, location=no, menubar=no, resizable=no, scrollbars=no, status=no");
  });

  updateQuote();
});
