$(document).ready(function() {

  var quotes = [{
    title: "Star Trek II: The Wrath of Khan",
    quote: "Khaaaan!",
    scene: "wRnSnfiUI54",
  }, {
    
    title: "Terminator 2: Judgement Day",
    quote: "Hasta la vista, baby.",
    scene: "LRxaXmXvjnU",
  
    
  }, {
   
    title: "Star Wars: The Empire Strikes Back",
    quote: "Do. Or do not. There is no try",
    scene: "BQ4yd2W50No",
  
  }, {
    
    title: "Soylent Green",
    quote: "Soylent Green is people!",
    scene: "9IKVj4l5GU4",
  
  
  }, {
    title: "2001: A Space Odyssey",
    quote: "I’m sorry, Dave. I’m afraid I can’t do that.",
    scene: "Wy4EfdnMZ5g",
   
  }, {
    title: "The Day the Earth Stood Still",
    quote: "Klaatu barada nikto.",
    scene: "HQSGHbbDR_Q",
  },{
    title: "Jurassic Park",
    quote: "Life finds a way",
    scene: "oijEsqT2QKQ",
  
  }, {
    title: "Star Wars",
    quote: "May the Force be with you.",
    scene: "D9XYKY4Km20",
  }, {
    title: "RoboCop",
    quote: "Dead or alive, you’re coming with me.",
    scene: "fEpjHtkttYg",
  }];
  
  
    
  
   var randomMovieQuote = "";
   var randomMovieTitle = "";
  
    //tweet quote and movie
    function tweet() {
      window.open("https://twitter.com/intent/tweet?text= " + randomMovieQuote + " - " + randomMovieTitle);
    }
  
  //select and display random quote 
      random = Math.floor(Math.random() * quotes.length);
      randomMovieQuote = quotes[random].quote;
      randomMovieTitle = quotes[random].title;
      $("#quote").html(randomMovieQuote);
      $("#title").html(randomMovieTitle);
    var youTubeUrl = "https://www.youtube.com/embed/" + quotes[random].scene;
      $(".youtube-iframe").html("<iframe width=100% height='500px' src='" + youTubeUrl + "?showinfo=0' frameborder='0' allowfullscreen>"); 
  
    }
  
    $("#getQuote").on("click", updateQuote);
    $("#tweet").on("click", tweet);
  
  updateQuote();
  });
  