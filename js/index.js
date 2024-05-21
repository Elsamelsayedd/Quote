/*

var text=["It is better to be hated for what you are than to be loved for what you are not." , "Be yourself; everyone else is already taken." , "So many books, so little time." , "Resentment is like drinking poison and waiting for your enemies to die." , "A room without books is like a body without a soul." , "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."];
var name=["--Andre Gide, Autumn Leaves" , "--Oscar Wilde" , "--Frank Zappa" , "--Nelson Mandela" , "--Marcus Tullius Cicero" , "--Bernard M. Baruch"];


var container = "";

function clickk() {
    


    var num = Math.floor(Math.random() * text.length);


    container=`<h2 class="my-5">
    ${text[num]}
  </h2>
  <h2 class="my-5">${name[num]}</h2>`;



  document.getElementById("newQuote").innerHTML=container;


}


*/



var quote  =[
  {
    text: "--Andre Gide, Autumn Leaves",
    name: "It is better to be hated for what you are than to be loved for what you are not.",
  },
  
  {
    text: "--Oscar Wilde",
    name: "Be yourself; everyone else is already taken.",
  },

  {
    text: "--Frank Zappa",
    name: "So many books, so little time.",
  },

  {
    text: "--Marcus Tullius Cicero",
    name: "A room without books is like a body without a soul.",
  },

  {
    text: "--Bernard M. Baruch",
    name: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },

];



function clickk() {

  var num = Math.floor(Math.random()* quote.length)


  document.getElementById('newQuote').innerHTML=`<h2 class="my-5">
  ${quote[num].name}
</h2>
<h2 class="my-5">${quote[num].text}</h2>`
}